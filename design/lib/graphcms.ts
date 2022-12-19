type variablesType = {
    id?:string
    stage?: string
    slug?: string
    date?: Date
    type?:string
    locales?: [string]
    first?: number
    orderBy?: string
}

interface Props {
    variables?: variablesType,
    preview?: boolean
}

async function fetchAPI(query: string, {variables, preview}: Props = {}){
    const res = await fetch(process.env.GRAPHCMS_PROJECT_API||"", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
                preview
                ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
                : process.env.GRAPHCMS_PROD_AUTH_TOKEN
                }`,
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()

    if(json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }
    return json.data
}

// Fetch Post
export async function getPreviewPostBySlug(slug: string) {
    const data = await fetchAPI(
        `
        query PostBySlug($slug: String!, $stage: Stage!){
            post(where: {slug: $slug}, stage: $stage){
                slug
            }
        }`,
            {variables:{
                stage: 'DRAFT',
                slug: slug,
            },
            preview: true
        }
    )
    return data.post
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
      {
        posts {
          slug
        }
      }
    `)
    return data.posts
}

export async function getAllPostsForHome(preview: boolean) {
    const data = await fetchAPI(
        `
        query PostForHome($stage: Stage!) {
            posts(
                orderBy: createdAt_DESC
                first: 1,
                stage: $stage
            ) {
                slug
                title
                content {
                    html
                },
                author {
                    name,
                    image {
                        url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
                    }
                }
                excerpt
                image {
                    url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
                }
                createdAt
            },
            morePosts: posts(
                orderBy: createdAt_DESC
                first: 6,
                stage: $stage
            ) {
                slug
                title
                author {
                    name,
                    image {
                        url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
                    }
                }
                excerpt
                image {
                    url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
                }
                createdAt
            }
        }`
        ,{
            preview,
            variables: {
                stage: preview ? 'DRAFT' : 'PUBLISHED',
            },
        }
    )
    return data
}

export async function getPostAndMorePosts(slug: string, preview: boolean) {
    const data = await fetchAPI(
        `
        query PostBySlug($slug: String!, $stage: Stage!) {
            post(stage: $stage, where: {slug: $slug}){
                title
                slug
                author {
                    name,
                    image {
                        url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
                    }
                },
                content {
                    html
                },
                createdAt
            }
            morePosts: posts(
                where: {slug_not_in: [$slug]},
                orderBy: createdAt_DESC
                first: 6, 
                stage: $stage
              ) {
                slug
                title
                author {
                    name,
                    image {
                        url(transformation: {image: {resize: {fit: crop, width: 100, height: 100}}})
                    }
                }
                excerpt
                image {
                    url(transformation: {image: {resize: {fit: crop, width: 2000, height: 1000}}})
                }
                createdAt
            }
        }`
        ,{
            preview,
            variables: {
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                slug
            },
        }
    )
    return data
}

// Start Gospel ----------------------------------------------------------------
export async function getAllGospelsWithDate() {
    const data = await fetchAPI(`
      {
        gospels {
            date,
            title
        }
      }
    `)
    return data.gospels
}

export async function getGospelByDate(date: Date, preview: boolean){
    const data = await fetchAPI(
        `
        query GospelPageQuery($date: Date!, $stage: Stage!){
            gospels(where: {date_gte: $date }, orderBy: date_ASC, first: 4, 
              stage: $stage) {
              title,
              slug,
              date,
              firstReading{
                html
              },
              secondReading{
                html
              },
              halelluia{
                html
              },
              gospel{
                html
              },
              reflection{
                html
              }
            }
          }
        `,{
            preview: preview,
            variables:{
                date: date,
                stage: preview ? 'DRAFT' : 'PUBLISHED',
            }
        }
    );
    return data.gospels;
}

export async function getGospelAndMoreGospels(date: Date, preview: boolean) {
    const data = await fetchAPI(
        `
        query GospelPageQuery($date: Date!, $stage: Stage!){
            gospel(where: {date: $date },
              stage: $stage) {
              title,
              slug,
              date,
              firstReading{
                html
              },
              secondReading{
                html
              },
              halelluia{
                html
              },
              gospel{
                html
              },
              reflection{
                html
              }
            }
            moreGospels: gospels(where: {date_gt: $date }, orderBy: date_ASC, first: 4, 
                stage: $stage) {
                title,
                slug,
                date,
                gospel{
                  html
                }
              }
          }
        `,{
            variables:{
                date: date,
                stage: preview ? 'DRAFT' : 'PUBLISHED',
            }
        }
    )
    return data
}

//Start Notifications --------------------------------

export async function getAllNotification(date: Date, preview: boolean, first: number){
    const data = await fetchAPI(
        `
        query AllNotificationQuery($date: Date!, $stage: Stage!, $first: Int!){
            notices(where: {endDate_gt: $date }, orderBy: startDate_ASC, first: $first, 
              stage: $stage) {
                title
                content{ html }
                image { url }
                excerpt
                startDate
                endDate
                registerLink
                contact{
                    name
                    address
                }
            }
          }
        `,{
            variables:{
                date: date,
                first: first,
                stage: preview ? 'DRAFT' : 'PUBLISHED',
            }
        }
    );
    return data.notices;
}

//Start Catechism --------------------------------

export async function getAllCatechismWithSlug() {
    const data = await fetchAPI(`
      {
        catechisms{
            slug
            lessonTitle
            catechismCategory{ title, slug}
        }
      }
    `)
    return data.catechisms
}

export async function getCatechismById(id: string, preview: boolean, locale: [string]){
    const data = await fetchAPI(
        `
        query getCatechismById($id: ID!, $stage: Stage!,$locales: [Locale!]!){
            catechism(where: {id: $id }, 
              stage: $stage) {
                lessonTitle
                slug
                lessonSummary { html }
                catechismCategory{ title, slug}
                catechismQuizs{ question, answer}
                catechismChapters {
                    title
                    slug
                    content { html }
                }
            },
            catechismCategories(locales: $locales) {
                slug
                title
                catechisms {
                    slug
                    lessonTitle
                }
            }
          }
        `,{
            variables:{
                id: id,
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                locales: locale
            }
        }
    );
    return data;
}

export async function getCatechismAndMore(slug: string, type: string,preview: boolean) {
    const data = await fetchAPI(
        `
        query CatechismBySlug($slug: String!, $type: String!, $stage: Stage!) {
            catechism(stage: $stage, where: {slug: $slug}){
                lessonTitle
                slug
                lessonSummary { html }
                catechismCategory{ title, slug}
                catechismQuizs{ question, answer}
                catechismChapters {
                    slug
                    title
                    content { html }
                }
            }
            moreCatechisms: catechisms(
                where: {slug_not_in: [$slug], slug_contains: $type},
                orderBy: createdAt_DESC
                first: 6, 
                stage: $stage
              ) {
                lessonTitle
                slug
                catechismChapters {
                    slug
                    title
                }
                catechismCategory{ title, slug}
            }
            catechismCategories(locales: vi) {
                slug
                title
                catechisms {
                    slug
                    lessonTitle
                }
            }
        }`
        ,{
            preview,
            variables: {
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                slug: slug,
                type: type
            },
        }
    )
    return data
}

//Aboutus

export async function getAboutUsForHome(id: string, preview: boolean, locale: [string]){
    const data = await fetchAPI(
        `
        query getAboutUsById($id: ID!, $stage: Stage!, $locales: [Locale!]!){
            aboutUs(where: {id: $id }, 
              stage: $stage,
              locales: $locales
              ) {
                title
                content { markdown }
                image { url }
            }
          }
        `,{
            variables:{
                id: id,
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                locales: locale,
            }
        }
    );
    //console.log(data)
    return data.aboutUs;
}

export async function getAllAboutUs(preview: boolean, locale: [string]){
    const data = await fetchAPI(
        `
        query getAllAboutUs($stage: Stage!, $locales: [Locale!]!){
            aboutUses(
              stage: $stage,
              locales: $locales
              ) {
                title
                content { markdown }
                image { url }
                type
            }
          }
        `,{
            variables:{
                stage: preview ? 'DRAFT' : 'PUBLISHED',
                locales: locale,
            }
        }
    );
    return data.aboutUses;
}
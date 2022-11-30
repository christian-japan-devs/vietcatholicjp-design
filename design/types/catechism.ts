

export type CatechismCategoryType = {
    title: string,
    slug: string,
    catechisms: CatechismType[]
}

export type CatechismChapterType = {
    title: string,
    slug: string,
    excerpt: string,
    content: string,
    catechism_lesson: CatechismType
}

export type CatechismQuizType = {
    question: string,
    slug: string,
    answer: string,
    correct_no: number,
    catechism_lesson: CatechismType
}

export type CatechismType = {
    id: string
    lessonTitle: string
    slug: string
    lesson_summary: string
    catechism_chapters: CatechismChapterType[]
    catechism_category: CatechismCategoryType
    catechism_quizs: CatechismQuizType[]
    created_at: string
}

export type CarolType = {
    id: string
    slug: string
    title: string
    content: string
    pdf_link: string
}

import Layout from '../../../../components/layout/Layout'
import {MetaProps} from '../../../../components/layout/meta'

const meta_data:MetaProps = {
  title:"",
  description:"string",
  ogUrl:"",
  ogImage:""
}

export default function Index() {

  return (
    <Layout meta_data={meta_data} current_page='serve'>
      <section className="max-w-screen-xl items-center my-6 mx-auto px-4">
        <div className="space-y-4 mb-8 text-center">
            <h2 className="text-gray-900  dark:text-gray-200 text-2xl md:text-6xl font-semibold">
                Section title
            </h2>
            <h3 className="text-gray-600 mb-4 dark:text-gray-200 text-xl font-semibold">
              Section sub title
            </h3>
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-center sm:text-4xl">
            Data to enrich your online business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
            amet fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
      </section>
    </Layout>
  )
}

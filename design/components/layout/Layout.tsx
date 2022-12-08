import NavBar from './navbar'
import Footer from './footer'
import Meta from './meta'
import {MetaProps} from './meta'

type Props = {
    children: React.ReactNode
    meta_data: MetaProps
    current_page: string
}

export const siteTitle = 'AnViet'
  
const Layout = ({ children , meta_data, current_page}: Props) => {
    return(
        <div>
            <Meta props={meta_data}/>
            <NavBar/>
            <div>{children}</div>
            <Footer current_page={current_page}/>
        </div>
    );
}

export default Layout;
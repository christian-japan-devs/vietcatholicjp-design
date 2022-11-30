import NavBar from './navbar'
import Footer from './footer'
import Meta from './meta'
import {MetaProps} from './meta'

type Props = {
    children: React.ReactNode
    meta_data: MetaProps
}

export const siteTitle = 'AnViet'
  
const Layout = ({ children , meta_data}: Props) => {
    return(
        <div>
            <Meta props={meta_data}/>
            <NavBar/>
            <div>{children}</div>
            <Footer/>
        </div>
    );
}

export default Layout;
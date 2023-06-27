import NavBar from "./navbar"
import Footer from "./footer"
import AppBar from "./appbar"

export default function Layout({ children, language }: any){
    return (
    <div className="box-border w-screen">
      <div className="flex flex-col md:ml-3.5 md:mr-3.5 h-screen md:min-h-screen overflow-x-auto">
          <AppBar language={language}/>
          <NavBar language={language}/>
          <div className="w-full order-2 flex-grow">
              {children}
          </div>
          <Footer/>
      </div>
    </div>
    )
}
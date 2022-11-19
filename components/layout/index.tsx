import HeadTags from "../HeadTags"

const Layout = ({ children }: any) => {

    return (
        <>
            <HeadTags />
            <a href="#main" className='button skip-to-main'>Go to Main Content</a>
            {/* Navbar */}

            <div id="main-loading"></div>

            <main id="main">
                {children}
            </main>

            {/* <ForumList /> */}

            {/* Aside */}
            <div id="main-toast" className="toasts">
                <div className="toast row justify-content-between">
                    <span id="toast-msg"></span>
                    <span className="icn close" onClick={(e: any) => { e.target.parentElement.classList.remove('show') }}></span>
                </div>
            </div >

            {/* Footer */}
        </>
    )
}

export default Layout

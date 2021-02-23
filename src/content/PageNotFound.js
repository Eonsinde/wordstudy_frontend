import pnfSVG from '../addendums/undraw_page_not_found_su7k.svg';

import './styles/pagenotfound.css';

const PageNotFound = () => {
   
    return ( 
        <section className='pnf-section'>
            <div className='bg-white m-auto d-flex justify-content-center align-items-center flex-column' style={{height: '100%', width: '85%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img className='svg-404' src={pnfSVG} alt='Page Not Found'></img>
                <br/>
                <h1 className='text-center text-dark'>Oops! <br/>Page Not Found</h1>
            </div>
        </section>
    );
}
 
export default PageNotFound;
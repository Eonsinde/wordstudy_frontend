import pnfSVG from '../addendums/undraw_page_not_found_su7k.svg';


const PageNotFound = () => {
    const imgStyles = {
        
    };

    return ( 
        <section style={{ padding: '100px 0', height: '1000px'}}>
            <div className='bg-white m-auto d-flex justify-content-center align-items-center flex-column' style={{height: '100%', width: '85%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
                <img style={imgStyles} src={pnfSVG} alt='Page Not Found'></img>
                <br/>
                <h1 className='text-center text-dark'>Oops! <br/>Page Not Found</h1>
            </div>
        </section>
    );
}
 
export default PageNotFound;
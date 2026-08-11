import About from "../components/About";

function HomePage() {
    return (
      <div className="homepage">
            <div className="content-container">
                  <div className="text-container">
                        <p>
                              <h1>I'm Eshiwani Michael</h1>
                              <h3>A passionate and versatile professional with expertise in web development, both frontend and backend web development(Full-stack developer), mobile programming, cyber security and networking. With a keen eye for aesthetic design and a robust technical skill set, I bring creativity and functionality together to craft seamless digital experiences.</h3>
                        </p>
            
                  </div>
                  <img src="public/MICHAEL.png" alt="Michael image" className="image-container" />
            </div> 
            <About/> 
    </div> 
    );
}

export default HomePage;
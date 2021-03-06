import React from 'react'

const Welcome = () => {

  return (
    <div>
        <section className='mt-5' >
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='text-center py-3'>Main page</h1>
                        <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
                        <ul>
                            <li>Clickable nav links that smooth scroll to page sections</li>
                            <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                            <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                            <li>Minimal custom CSS so you are free to explore your own unique design options</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light" >
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Services we offer</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-lg-8">
                        <h2>Contact us</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome
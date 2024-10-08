import React from 'react'

const RelatedBlogDetail = () => {
  return (
    <>
    <section className="related-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related-blog-title">
                        <h2>Post You May Like</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-1.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-2.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="img/blog/blog-3.jpg" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default RelatedBlogDetail
import React from 'react'
import Link from 'next/link';
export default function AboutUs() {
  return (
    <div>
      <style jsx>{`
      
      .page-section{
        background:#000;
        color: orange;
      }
      .timeline {
        position: relative;
        padding: 0;
        list-style: none;
      }
      .timeline:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 40px;
        width: 2px;
        margin-left: -1.5px;
        content: "";
        background-color: #e9ecef;
      }
      .timeline > li {
        position: relative;
        min-height: 50px;
        margin-bottom: 50px;
      }
      .timeline > li:after, .timeline > li:before {
        display: table;
        content: " ";
      }
      .timeline > li:after {
        clear: both;
      }
      .timeline > li .timeline-panel {
        position: relative;
        float: right;
        width: 100%;
        padding: 0 20px 0 100px;
        text-align: left;
      }
      .timeline > li .timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      .timeline > li .timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
      .timeline > li .timeline-image {
        position: absolute;
        z-index: 100;
        left: 0;
        width: 80px;
        height: 80px;
        margin-left: 0;
        text-align: center;
        color: white;
        border: 7px solid #e9ecef;
        border-radius: 100%;
        background-color: #ffc800;
      }
      .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
        font-size: 10px;
        line-height: 14px;
        margin-top: 12px;
      }
      .timeline > li.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 20px 0 100px;
        text-align: left;
      }
      .timeline > li.timeline-inverted > .timeline-panel:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      .timeline > li.timeline-inverted > .timeline-panel:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
      .timeline > li:last-child {
        margin-bottom: 0;
      }
      .timeline .timeline-heading h4, .timeline .timeline-heading .h4 {
        margin-top: 0;
        color: inherit;
      }
      .timeline .timeline-heading h4.subheading, .timeline .timeline-heading .subheading.h4 {
        text-transform: none;
      }
      .timeline .timeline-body > ul,
      .timeline .timeline-body > p {
        margin-bottom: 0;
      }
      .timeline-body{
        color: white;
        font-size : 16px;
      }
      
      @media (min-width: 768px) {
        .timeline:before {
          left: 50%;
        }
        .timeline > li {
          min-height: 100px;
          margin-bottom: 100px;
        }
        .timeline > li .timeline-panel {
          float: left;
          width: 41%;
          padding: 0 20px 20px 30px;
          text-align: right;
        }
        .timeline > li .timeline-image {
          left: 50%;
          width: 100px;
          height: 100px;
          margin-left: -50px;
        }
        .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
          font-size: 13px;
          line-height: 18px;
          margin-top: 16px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
          float: right;
          padding: 0 30px 20px 20px;
          text-align: left;
        }
      }
      @media (min-width: 992px) {
        .timeline > li {
          min-height: 150px;
        }
        .timeline > li .timeline-panel {
          padding: 0 20px 20px;
        }
        .timeline > li .timeline-image {
          width: 150px;
          height: 150px;
          margin-left: -75px;
        }
        .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
          font-size: 18px;
          line-height: 26px;
          margin-top: 30px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
          padding: 0 20px 20px;
        }
      }
      @media (min-width: 1200px) {
        .timeline > li {
          min-height: 170px;
        }
        .timeline > li .timeline-panel {
          // padding: 0 20px 20px 100px;
          width: 100%;
          z-index: 1000;
          color: white;
        }
        .timeline > li .timeline-image {
          width: 170px;
          height: 170px;
          margin-left: -85px;
        }
        .timeline > li .timeline-image h4, .timeline > li .timeline-image .h4 {
          margin-top: 40px;
        }
        .timeline > li.timeline-inverted > .timeline-panel {
          padding: 0 100px 20px 20px;
        }
      }
      
      .page-section {
        padding: 6rem 0;
      }
      .page-section h2.section-heading, .page-section .section-heading.h2 {
        font-size: 2.5rem;
        margin-top: 0;
        margin-bottom: 1rem;
      }
      .page-section h3.section-subheading, .page-section .section-subheading.h3 {
        font-size: 1rem;
        font-weight: 400;
        font-style: italic;
        font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        margin-bottom: 4rem;
      }
      
      @media (min-width: 768px) {
        section {
          padding: 9rem 0;
        }
      }
      
      .text-center {
          text-align: center !important;
      }
      
      .page-section h2.section-heading, .page-section .section-heading.h2 {
          font-size: 2.5rem;
          margin-top: 0;
          margin-bottom: 1rem;
      }
      .text-uppercase {
          text-transform: uppercase !important;
      }
      
      .page-section h3.section-subheading, .page-section .section-subheading.h3 {
          font-size: 1rem;
          font-weight: 400;
          font-style: italic;
          font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          margin-bottom: 4rem;
      }
      
      .text-muted {
          --bs-text-opacity: 1;
          color: #6c757d !important;
      }
      
      p {
          line-height: 1.75;
      }
      @media (min-width: 1400px){
      .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
          max-width: 1320px;
      }
    }
      @media (min-width: 1200px){
        .container-xl, .container-lg, .container-md, .container-sm, .container {
          max-width: 1140px;
      }
    }
        @media (min-width: 992px){
        .container-lg, .container-md, .container-sm, .container {
            max-width: 960px;
        } 
      }
      @media (min-width: 768px){
      .container-md, .container-sm, .container {
          max-width: 720px;
      }
    }
      @media (min-width: 576px){
      .container-sm, .container {
          max-width: 540px;
      }
    }
      .container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm {
          width: 100%;
          padding-right: var(--bs-gutter-x, 0.75rem);
          padding-left: var(--bs-gutter-x, 0.75rem);
          margin-right: auto;
          margin-left: auto;
      }
      *, *::before, *::after {
          box-sizing: border-box;
      }
    
      div {
          display: block;
      }
      
      `}
      </style>
      <section className={`page-section`} id={`about`}>
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">درباره ما</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2015</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                        </div>
                    </li>
                        
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                       <a style={{textDecoration:'none'}}href="">     <h4>
                                 view
                                 <br/>
                                 Our
                                <br/>
                                catalog
                         </h4></a>
                        </div>
                    </li>
                </ul>
                <Link href="/">بازگشت به خانه</Link>
            </div>
        </section>
    </div>
  )
}
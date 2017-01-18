import React from 'react';
import SliderRow from './SliderRow';

const ExampleSlider = (props) => {
  
  let slideArray;
  let genSlides;
  let sliderHtml = '';
  
  // generate the HTML for slider
  if (props.examples) {
    let examples = props.examples;
    let output = [];
    let spacing = 4;
    
    for (var i = 0; i < examples.length; i += spacing)
    {
        output[output.length] = examples.slice(i, i + spacing);
    }

    slideArray = output;
    
    // create slide rows
    genSlides = slideArray.map( ( slides, i ) => {
      let isFirst = i === 0 ? true : false;
      
      return (
        <SliderRow key={'slider-row' + i} isFirst={isFirst} slides={slides} />
      )
    });
    
  }
  
  // check if there are any examples
  if ( props.examples === undefined || props.examples.length < 1 ) {
    // no examples no slider
    sliderHtml = <h4 className="text-center">Looks like there are no examples to show! :(</h4>;
  } else {
    // has examples add a slider
    sliderHtml = (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="Carousel" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                <li data-target="#Carousel" data-slide-to="1"></li>
                <li data-target="#Carousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
              
              { genSlides }
                
              </div>
              <a data-slide="prev" href="#Carousel" className="left carousel-control">‹</a>
              <a data-slide="next" href="#Carousel" className="right carousel-control">›</a>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-center">Examples <i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addIdeaModal" aria-hidden="true" title="Add an idea"></i></h2>
      {sliderHtml}
    </section>
  );

}

export default ExampleSlider;
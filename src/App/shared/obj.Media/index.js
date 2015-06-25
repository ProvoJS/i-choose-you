/*** @jsx React.DOM */
import './style';
import React from 'react';

var MediaClass = 'Media';
var MediaImgClass = MediaClass + '_img';
var MediaBdyClass = MediaClass + '_bdy';

var Media = React.createClass({

  propTypes: {
    img: React.PropTypes.object.isRequired,
    bdy: React.PropTypes.object.isRequired,
  },

  render: function() {
    return(
      <div className={MediaClass} {...this.props} >
        {this.renderEl(this.props.img, MediaImgClass)}
        {this.renderEl(this.props.bdy, MediaBdyClass)}
      </div>
    );
  },

  hasOwnClassName(reactEl) {
    return reactEl.props && reactEl.props.className;
  },

  renderEl(el, className) {
    if (this.hasOwnClassName(el)) {
      el.props.className = `${className} ${img.props.className}`;
    } else {

      if (!el.props) {
        el.props = {};
      }

      el.props.className = className;
    }

    return el;
  }
  
});

export default Media;
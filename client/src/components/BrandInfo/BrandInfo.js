import React, { Component } from 'react';
import './BrandInfo.css';

class BrandInfo extends Component {
    render() {
        return(
            <div className="brand-info">
                <div className="brand-info-container">
                    <div className="egf-college">
                        <div className="egf-logo-college pull-left">
                            COLLEGE LOGO HERE
                        </div>
                        <div className="egf-info-college pull-right">
                            COLLEGE
                        </div>
                    </div>
                    <div className="egf-highschool">
                        <div className="egf-logo-highschool pull-left">
                            HIGHSCOOL IMAGE
                        </div>
                        <div className="egf-info-highschool pull-right">
                            HIGHSCHOOL
                        </div>
                    </div>
                    <div className="egf-media">
                        <div className="egf-logo-media pull-left">
                            MEDIA IMAGE
                        </div>
                        <div className="egf-info-media pull-right">
                            MEDIA
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandInfo;
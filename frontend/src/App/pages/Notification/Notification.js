import React, { Component } from 'react'
import Header from '../../../../src/components/header/Header';
import TabPanel from '../Notification/NoticationTabs';

export default class Notification extends Component {
    render() {
        return (
            <div className="notification-main">
                {/* top header */}
                <div className="top-area">
                <Header />
                </div>
                {/* top header */}
                <div className="notification-wrapper">
                    <div className="container">
                        <div className="pl-5 pr-5">
                            <div className="pl-5 pr-5">
                                <TabPanel/>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

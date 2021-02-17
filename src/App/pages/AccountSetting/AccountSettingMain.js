

import React, { Component } from 'react'
import './AccountSettingMain.css'
import ProfileSetting from './ProfileSetting'
import  DefaultMenu from '../jobs/DefaultMenu'
import Navbar from '../../../components/Navbar'

let selecvalue=0;
 export const  AccountSettingMain = () => (
   
  <div className="AccountSettingMain">

          <div className='default-menu '>
             <Navbar text="" value="Post a Project" /> 
             <DefaultMenu  value={2}/>
          </div>
    <Tabs selected={ 0 }>
      <TabList>

        <Tab>

        <div class=""><span class=" "><Button>1</Button></span> <span class="AS_text">Profile Setting</span></div> <div className="AS_line"></div>
  
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>2</Button></span> <span class="AS_text">Contact Info</span></div> <div className="AS_line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>3</Button></span> <span class="AS_text">Membership Plan</span></div> <div className="AS_line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>4</Button></span> <span class="AS_text">Notification Setting</span></div> <div className="AS_line"></div>
        </Tab>
        <Tab>
        <div class=""><span class=" "><Button>5</Button></span> <span class="AS_text">Payment Withdraw</span></div> 
        </Tab>
      </TabList>
      <TabPanel>
         <ProfileSetting/>

      </TabPanel>
      <TabPanel>
      <ProfileSetting/>

      </TabPanel>

      <TabPanel>
      <ProfileSetting/>
      </TabPanel>

      <TabPanel>
      <ProfileSetting/>
      </TabPanel>
      <TabPanel>
      <ProfileSetting/>
    </TabPanel>
    
    </Tabs>
  </div>
)

/*
 * Tabs is the stateful component.
 * You can pass an index in the `selected` prop
 * to specify which tab is active by default.
 *
 * This component handles the entire tabs system.
 * It transforms its own children (if they are Tab or TabPanel) to pass the
 * required props in order to run automatically the system.
 */

class Tabs extends Component {
  state = { 
              selected: this.props.selected ,
              currenttab : null,
            
            };

  setSelected(selected) {
    if (selected !== this.state.selected) {
      this.setState({ selected })
    }
  }

      handleClick(tab) 
      {
        return () => this.setSelected(tab)
      }

          renderTabList(child)
          {

            let tab = 0
            return React.cloneElement(child, 
              {
                
              children: React.Children.map(child.props.children, (childTab) => {
                if (childTab.type.name === "Tab") 
                {
                  const _isActive = (tab === this.state.selected)
                  const _ct = this.state.selected
                  this.state.currenttab = this.state.selected
                  const _onClick = this.handleClick(tab)
                  tab++
                  console.log("tab",_isActive)
                  return React.cloneElement(childTab, { _isActive, _onClick,_ct })
                }

                return childTab
              }),
            })
          }

                renderChildren(children) 
                {
                  let panel = 0

                  return React.Children.map(children, (child) => {
                    if (child.type.name === "TabList") 
                    {
                      const _ct = this.state.selected
                      return this.renderTabList(child)
                    }

                    if (child.type.name === "TabPanel") {
                      const _isActive = (panel === this.state.selected)

                      panel++
                      return React.cloneElement(child, { _isActive })
                    }

                    return child
                  })
                }

  render() {
selecvalue=this.state.selected
    return (
      <div>
            
              
              <div className="Tabs">
                
                { 
                  this.renderChildren(this.props.children)
                
                
                }
                  
               
                  {/* <Taimoor data={this.state.selected}/> */}
              </div>


            
       </div>
    )
  }
}


// const Taimoor = (props) => 
// {
//   return (
//     <div>
//        <h1>hiii {props.data}</h1>
        
//     </div>
//   )
// }


const TabList = ({ 
  
  children, 
  
}) => (

  <li className="TabList">

    { children  }  

    <div className="AS_left_img">

</div> 

  </li>

)

const Tab = ({
  _ct,
  _onClick,
  _isActive,
  children,
}) => (
  <li 
    className={ `Tab  ${ _isActive ? "is-active" : "" }` }
    onClick={ _onClick }>
    { children }
  </li>
)

const TabPanel = ({
  _isActive,
  children,
}) => (
  <div className={ `TabPanel  ${ _isActive ? "is-active" : "" }` }>
    { children }
  </div>
)

/* --- */

const Button = ({ children }) => (
  <button className="Button">
    { children }
  </button>
)


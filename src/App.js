import "./App.css";
import './Index.css'
import "./CSS/Tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { tabData } from "./components/DataTabTitle";
import { cardData } from "./components/datas/CardData";
import { webHosting } from "./components/datas/WebHosting";
import { dedicatedServers } from "./components/datas/DedicatedServers";
import { virtualCloud } from "./components/datas/VirtualCloudServers";
import { wordPressHosting } from "./components/datas/WordPressHosting";
import { emailHosting } from "./components/datas/EmailHosting";
import { vpsHosting } from "./components/datas/VpsHostingServers";
import { freeHosting } from "./components/datas/FreeHosting";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Tabs className="container">

        <TabList>
          <div className="tablists">
            {
              tabData.map((item) => {
                return(
                    <Tab className='tab' key={item.id}>{item.title}</Tab>
                )
              })
            }
          </div>

        </TabList>

        <TabPanel>
          <div className="tabPanel">
          {
            cardData.map((cardItem) => {
              return(
                <Cards
                key={cardItem.id}
                header={cardItem.title}
                price={cardItem.newprice}
                sale={cardItem.oldprice}
                btn={cardItem.link}
                />
              )
             
            })
          }
          </div>
        </TabPanel>

    <TabPanel>
    <div className="tabPanel">
              {
                webHosting.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
    </TabPanel>


      <TabPanel>
      <div className="tabPanel">
              {
                dedicatedServers.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
      </TabPanel>
            

      <TabPanel>
      <div className="tabPanel">
              {
                virtualCloud.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
        </TabPanel>


        <TabPanel>
        <div className="tabPanel">
              {
                wordPressHosting.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
          </TabPanel>


        <TabPanel>
        <div className="tabPanel">
              {
                emailHosting.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
            </TabPanel>


            <TabPanel>
            <div className="tabPanel">
              {
                vpsHosting.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
              </TabPanel>


            <TabPanel>
            <div className="tabPanel">
              {
                freeHosting.map((cardItem) => {
                  return(
                    <Cards
                    key={cardItem.id}
                    header={cardItem.title}
                    price={cardItem.newprice}
                    sale={cardItem.oldprice}
                    btn={cardItem.link}
                    />
                  )
                
                })
              }
              </div>
            </TabPanel>
        
      

      </Tabs>
    </div>
  );
}

export default App;

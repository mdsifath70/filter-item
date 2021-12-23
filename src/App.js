import { useEffect, useState } from 'react';
import Menu from './components/Api/menuApi';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Layout from './components/Layout';
import Nav from './components/Nav';
import './styles/style.css';

function App() {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState([]);

    const filterItem = (category) => {
        if (category === 'All') {
            setMenuData(Menu);
        } else {
            const updatedMenuData = Menu.filter((currEl) => {
                return currEl.category === category;
            });
            setMenuData(updatedMenuData);
        }
    };

    useEffect(() => {
        const uniqueMenuData = [
            'All',
            ...new Set(
                Menu.map((currEl) => {
                    return currEl.category;
                })
            ),
        ];

        setMenuList(uniqueMenuData);
    }, []);

    return (
        <>
            <Nav filterItem={filterItem} menuList={menuList} />
            <Layout>
                <CardContainer>
                    {menuData.map((currEl) => (
                        <Card key={currEl.id} currEl={currEl} />
                    ))}
                </CardContainer>
            </Layout>
        </>
    );
}

export default App;

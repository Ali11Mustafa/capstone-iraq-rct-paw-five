import React, { useState, useEffect } from 'react'

import { Navbar, Nav, Dropdown, Form } from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { NavLink } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import {selectedLang} from '../../redux/actions/actions'

import {
    HOME_ROUTE,
    ADOPT_ROUTE,
    ABOUT_ROUTE,
    RESOURCE_CAT_ROUTE,
    RESOURCE_DOG_ROUTE,
    LOGIN_ROUTE,
    SIGNUP_ROUTE,
    ADD_APET_ROUTE,
    CONTACT_US_ROUTE,
} from '../../routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../../images/logo.ico'

export default function NavBar() {

    const globaleLang = useSelector(state => state.langReducer)
    const dispatch = useDispatch();
    const { t } = useTranslation()
    const [dirProperties, setDir] = useState({
        dir: 'ltr',
        className: 'ml-auto',
        textDir:'text-left'
    })

    const selectedLanguage = (lang) => {
        i18next.changeLanguage(lang)
    }
    const handelOption = (e) => {
        localStorage.setItem('lang',e.target.value)
        dispatch(selectedLang(e.target.value))
        selectedLanguage(e.target.value)
    }

    const handelDir = () => {
        if (localStorage.getItem('lang')!== 'en') {
            const newDir = 'rtl'
            const newClassName = 'mr-auto'
            const newtextDir = 'text-right'
            const newdirProperties = { ...dirProperties }
            newdirProperties.dir = newDir
            newdirProperties.className = newClassName
            newdirProperties.textDir= newtextDir
            setDir(newdirProperties)
        } else {
            const newDir = 'ltr'
            const newClassName = 'ml-auto'
            const newtextDir = 'text-left'
            const newdirProperties = { ...dirProperties }
            newdirProperties.dir = newDir
            newdirProperties.className = newClassName
            newdirProperties.textDir= newtextDir
            setDir(newdirProperties)
        }
    }

    useEffect(() => {
        handelDir()
    },[globaleLang])

    return (
        <div dir={dirProperties.dir}>
            <h1>{localStorage.getItem('lang')}</h1>
            {/* <Router> */}
                <Navbar className={`theme-color ${dirProperties.textDir} p-0 border-0 `} expand="lg">
                    <Navbar.Brand as={NavLink} to={HOME_ROUTE}>
                        <img src={logo} className='ml-1 mr-1' width="55px" height="55px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-0 text-light">/</Navbar.Toggle>
                    <Navbar.Collapse   >
                        <Nav
                            className={` text-light  ${dirProperties.className}`}
                        >
                            <Nav.Link
                                as={NavLink}
                                to={HOME_ROUTE}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.home')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to={ABOUT_ROUTE}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.about')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to={ADOPT_ROUTE}
                                RESOURCE_CAT_ROUTE
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.adopt')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                to={ADD_APET_ROUTE}
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.addapet')}
                            </Nav.Link>
                            <Dropdown  >
                                <Dropdown.Toggle

                                    className="text-light bg-transparent  border-0 p-0 m-3 " 
                                    >
                                    {t('navbar.resources.0')}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item className="text-danger bg-light" as={NavLink} to={RESOURCE_DOG_ROUTE}>{t('navbar.resources.2')}</Dropdown.Item>
                                    <Dropdown.Item className="text-danger bg-light" as={NavLink} to={RESOURCE_CAT_ROUTE}>{t('navbar.resources.1')}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Nav.Link
                                as={NavLink}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                to={CONTACT_US_ROUTE}
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.contact')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                to={LOGIN_ROUTE}
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.logIn')}
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid white',
                                }}
                                exact
                                to={SIGNUP_ROUTE}
                                className="m-3 p-0 text-light"
                            >
                                {t('navbar.signUp')}
                            </Nav.Link>
                                <Form.Control
                                    className=" fa m-3 text-light text-danger shadow-none bg-transparent border-0 "
                                    onChange={handelOption}
                                    as="select"
                                    size="sm"
                                    custom
                                    value=""
                                    style={{ maxWidth: '50px' }}
                                >
                                    <option
                                        
                                        style={{ display: 'none' }}
                                        className="fas p-0"
                                    >
                                        &#xf1ab;
                                    </option>
                                    <option className='text-danger' value="en">English</option>
                                    <option className='text-danger' value="ar">عربي</option>
                                    <option className='text-danger' value="kr">كوردى</option>
                                </Form.Control>
                          
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            {/* </Router> */}
        </div>
    )
}

import React from 'react'
import "./Navbar.css"
import img2 from "../../images/logo.png"
import { BiSearch } from "react-icons/bi"
const Navbar = () => {
    return (

        <div className="js-site-nav site-nav lazyloading-hidden">
            <div className="site-nav-container">
                <nav className="site-nav-desktop-only align-center" aria-label="primary">
                    <div data-site-nav-category="Top Nav">
                        <a href="/" data-site-nav-element="Logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width={76} height={30} viewBox="0 0 76 19" fill="none" className="site-nav-desktop-logo fill-current">
                                <title>Dribbble: the community for graphic design</title>
                                <path fillRule="evenodd" clipRule="evenodd" d="M75.8822 14.657C72.7063 20.0415 67.6766 18.4791 66.166 17.2558C65.5231 17.692 64.3958 18.6481 62.8926 18.5377C59.6913 18.3027 58.5449 13.7279 58.5449 13.7279C58.5679 13.7462 57.5913 14.0649 57.0635 14.0592C57.0567 15.4008 55.897 18.6056 52.7672 18.5646C49.2551 18.5188 48.5411 13.2864 48.5411 13.2864C48.5411 13.2864 48.1916 13.7717 46.8627 14.2551C46.9296 13.2244 46.8807 18.4077 42.6713 18.4839C39.3435 18.5442 38.4452 13.2057 38.4452 13.2057C38.4452 13.2057 37.8679 13.8054 36.7491 14.0134C36.8202 12.9659 36.7046 18.5015 32.4947 18.4839C29.6497 18.4721 28.6775 15.1954 28.7531 14.7406C28.8496 14.161 27.7916 18.5654 25.0281 18.4968C23.8877 18.4633 23.0375 17.6376 22.504 16.5368C21.7898 17.354 20.7529 18.4968 19.5897 18.4968C17.5017 18.4968 16.5812 16.7504 16.7371 11.7624C16.7504 11.1708 16.7077 10.9381 16.1196 10.8496C15.7666 10.7907 15.4051 10.6792 15.0226 10.6204C14.9 11.0295 13.8602 18.3637 10.2847 18.5029C9.08519 18.5496 8.4293 17.5105 7.89066 16.7393C7.06497 17.8316 5.97501 18.5377 4.42227 18.5377C1.79205 18.5377 0 16.4114 0 13.7885C0 11.1655 1.79205 9.03942 4.42227 9.03942C4.88732 9.03942 5.01787 9.10608 5.44272 9.23004C4.569 1.27504 6.63238 0.0317866 8.43739 0.0317866C10.1703 0.0317866 13.1308 4.05384 8.96512 14.2559C9.88998 17.2989 11.8838 17.1268 12.8419 10.8626C13.0369 9.58927 12.5155 7.87099 13.3265 7.63117C14.809 7.19289 14.9663 8.50787 15.6614 8.72697C16.3964 8.95853 16.8254 8.93592 17.531 9.08327C18.7367 9.31873 19.2072 9.96643 19.0603 11.409C18.8839 13.2343 18.5753 15.891 19.5162 16.2148C20.1947 16.45 21.4335 15.0429 21.6509 14.273C21.8682 13.5031 21.9136 13.2396 21.9329 12.6749C21.9623 11.468 21.9992 10.5833 22.205 9.67055C22.2931 9.31736 22.3935 9.08347 22.7931 9.06748C23.1219 9.0591 23.7232 8.96009 23.9879 9.16611C24.3407 9.43119 24.2966 9.70017 24.2561 10.4081C23.8458 20.5015 27.0038 15.4628 27.9454 11.4283C27.6101 6.86623 27.8403 0.115326 30.6991 0.00210112C32.1859 -0.0567822 32.8432 1.13431 32.9155 2.02335C33.12 4.53433 31.9745 8.69372 30.468 11.4909C29.607 17.1984 34.2325 18.3269 34.9722 13.7712C33.762 13.1958 32.4541 10.8668 33.5184 9.73181C34.1156 9.09483 36.6015 10.0099 36.6422 12.0057C37.8616 11.6796 38.0244 10.9911 38.0413 11.1052C37.7061 6.54312 38.017 0.115385 40.876 0.00215941C42.3626 -0.0567239 43.0198 1.13437 43.0921 2.02341C43.2966 4.53438 42.1511 8.69378 40.6448 11.491C39.7837 17.1984 44.4093 18.327 45.1488 13.7713C44.2528 13.5984 42.3614 11.1212 43.4527 9.73187C44.0359 8.98944 46.5127 10.5334 46.79 12.0718C47.9614 11.7403 48.1205 11.0737 48.1373 11.1859C47.802 6.62397 48.1129 0.196235 50.9719 0.0830097C52.4585 0.0241264 53.1157 1.21522 53.188 2.10426C53.3925 4.61523 52.247 8.77471 50.7405 11.5719C49.8796 17.2794 54.5051 18.4077 55.2448 13.852C54.0135 13.647 52.2636 11.0314 53.672 9.69333C54.2347 9.15869 56.3848 10.5465 56.8881 12.1298C57.5874 12.1029 58.0227 11.8617 58.116 11.8374C56.9996 6.4818 57.8307 0.0558781 60.9062 0.00223793C62.5685 -0.0267262 64.1936 0.900905 63.4803 5.99604C62.7994 10.8574 60.3519 12.8975 60.3576 12.9287C60.5 13.5111 61.7559 18.3851 64.9185 15.8134C64.7548 15.4427 64.5909 15.064 64.4993 14.6052C63.9751 11.9327 65.0047 8.91409 67.8032 8.42622C69.4066 8.14671 70.917 8.92734 71.1558 10.6872C71.5487 13.5669 68.9484 15.6524 67.9596 16.1048C67.5167 15.8532 71.9742 18.712 74.6196 12.9829C74.773 12.6558 74.9579 12.6835 75.1975 12.8521C75.3667 12.9712 76.3305 13.8842 75.8822 14.657ZM6.33552 13.0809C6.20092 12.6785 5.92469 11.7918 5.82701 11.4076C5.28905 10.9398 4.90507 10.8638 4.21455 10.8638C2.68 10.8638 1.77679 12.2826 1.77679 13.8125C1.77679 15.3423 2.76077 16.7613 4.29533 16.7613C5.6252 16.7613 6.63735 15.8571 6.94615 14.5771C6.73001 14.0781 6.5156 13.6195 6.33552 13.0809ZM8.39979 2.13753C7.32153 2.13753 6.95576 4.70973 7.02674 6.90406C7.08953 8.84411 7.63164 10.5521 7.91286 11.3174C7.98426 11.4133 7.971 11.3509 8.03474 11.4526C9.90694 7.35053 9.13041 2.13753 8.39979 2.13753ZM30.8531 2.21833C29.4595 2.0585 29.4685 7.86389 29.6415 9.16611C30.3653 8.00823 31.6226 2.53009 30.8531 2.21833ZM41.0297 2.21833C39.6361 2.0585 39.6451 7.86389 39.8182 9.16611C40.5419 8.00823 41.7993 2.53009 41.0297 2.21833ZM51.1257 2.2991C49.732 2.13927 49.741 7.94469 49.9141 9.247C50.6378 8.08902 51.8952 2.61084 51.1257 2.2991ZM61.06 1.87849C58.8887 2.31451 59.3943 9.55399 59.7241 10.8237C62.2817 7.31085 62.3344 1.74654 61.06 1.87849ZM69.1975 10.9254C69.0871 10.4638 68.5351 10.2171 68.1541 10.2779C67.0639 10.4268 66.0065 11.7846 66.4158 13.8518C66.5069 14.3122 66.7349 14.736 66.7312 14.7219C69.1711 13.085 69.3785 11.7951 69.1975 10.9254ZM23.2205 7.46958C22.9089 7.46964 22.6043 7.37729 22.3452 7.20422C22.0861 7.03114 21.8841 6.78512 21.7648 6.49725C21.6455 6.20939 21.6143 5.89261 21.6751 5.587C21.7358 5.28138 21.8859 5.00065 22.1062 4.7803C22.3265 4.55995 22.6072 4.40989 22.9128 4.34909C23.2184 4.28829 23.5352 4.31948 23.8231 4.43873C24.111 4.55797 24.357 4.75991 24.5301 5.019C24.7032 5.27809 24.7956 5.5827 24.7956 5.89429C24.7956 6.10115 24.7549 6.30599 24.6757 6.4971C24.5966 6.68822 24.4806 6.86187 24.3343 7.00815C24.188 7.15443 24.0144 7.27047 23.8233 7.34964C23.6322 7.42882 23.4274 7.46957 23.2205 7.46958Z" fill="#0D0C22" />
                            </svg>
                            <span className="accessibility-text">Back to home page</span>
                        </a>
                    </div>
                    <ul className="site-nav-desktop-nav">
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Inspiration" href="/shots">Inspiration</a>
                            <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list site-nav-dropdown-white-bg">
                                    <div data-site-nav-category="Inspiration">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Explore Design Work" href="/shots/popular">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M2.5 0.75H6.5C7.4665 0.75 8.25 1.5335 8.25 2.5V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H2.5C1.5335 8.25 0.75 7.4665 0.75 6.5V2.5C0.75 1.5335 1.5335 0.75 2.5 0.75ZM13.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V2.5C11.75 1.5335 12.5335 0.75 13.5 0.75ZM13.5 11.75H17.5C18.4665 11.75 19.25 12.5335 19.25 13.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H13.5C12.5335 19.25 11.75 18.4665 11.75 17.5V13.5C11.75 12.5335 12.5335 11.75 13.5 11.75ZM2.5 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V13.5C0.75 12.5335 1.5335 11.75 2.5 11.75Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Explore Design Work
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Trending designs to inspire you</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="New & Noteworthy" href="/shots/recent">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="currentColor" className="site-nav-dropdown-icon">
                                                        <path d="M13.4842 15.5185C11.8769 16.8972 10.4552 17.9485 10 18.279C9.54459 17.9483 8.12304 16.897 6.51599 15.5185C4.62061 13.8926 2.5424 11.8742 1.4452 10.0758L1.44176 10.07L1.43651 10.0611C0.987839 9.31334 0.75 8.45358 0.75 7.57322C0.75 4.91104 2.90591 2.75 5.54681 2.75C7.07683 2.75 8.49854 3.48017 9.39693 4.69529L10 5.51098L10.6031 4.69529C11.5014 3.48018 12.9234 2.75 14.4532 2.75C17.0941 2.75 19.25 4.91104 19.25 7.57322C19.25 8.45358 19.0122 9.31334 18.5635 10.0611L18.5581 10.0701L18.556 10.0738C17.4592 11.8727 15.3803 13.892 13.4842 15.5185Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        New &amp; Noteworthy
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Up-and-coming designers</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Playoffs" href="/shots?list=playoffs">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="4.75" width="14.5" height="14.5" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M16 1.5H8C7.40168 1.5 6.85156 1.70993 6.42022 2.062H4.5C5.18236 0.832288 6.49399 0 8 0H16C18.2091 0 20 1.79086 20 4V12C20 13.4806 19.1956 14.7733 18 15.4649V13.5002C18.314 13.0824 18.5 12.5629 18.5 12V4C18.5 2.61929 17.3807 1.5 16 1.5Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Playoffs
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Work designers are riffing on</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item yellow">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Blog" href="/stories">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M4.16667 5.08331C4.16667 4.6691 4.50246 4.33331 4.91667 4.33331H14.25C14.6642 4.33331 15 4.6691 15 5.08331C15 5.49753 14.6642 5.83331 14.25 5.83331L4.91667 5.83331C4.50246 5.83331 4.16667 5.49753 4.16667 5.08331Z" fill="currentColor" />
                                                        <path d="M4.16667 9.25C4.16667 8.83579 4.50246 8.5 4.91667 8.5L12.5833 8.5C12.9976 8.5 13.3333 8.83579 13.3333 9.25C13.3333 9.66422 12.9976 10 12.5833 10L4.91667 10C4.50246 10 4.16667 9.66421 4.16667 9.25Z" fill="currentColor" />
                                                        <path d="M4.91667 12.6666C4.50246 12.6666 4.16667 13.0024 4.16667 13.4166C4.16667 13.8308 4.50246 14.1666 4.91667 14.1666H9.25001C9.66422 14.1666 10 13.8308 10 13.4166C10 13.0024 9.66422 12.6666 9.25001 12.6666H4.91667Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Blog
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Interviews, tutorials, and more</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Weekly Warm-up" href="/shots/19160667-Design-a-colorful-wine-label">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="2.58331" width="18.5" height="16.8333" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V5C5.75 5.41421 5.41421 5.75 5 5.75C4.58579 5.75 4.25 5.41421 4.25 5V1C4.25 0.585786 4.58579 0.25 5 0.25ZM15 0.25C15.4142 0.25 15.75 0.585786 15.75 1V5C15.75 5.41421 15.4142 5.75 15 5.75C14.5858 5.75 14.25 5.41421 14.25 5V1C14.25 0.585786 14.5858 0.25 15 0.25ZM12.8333 12.5H13.8333C14.1095 12.5 14.3333 12.7239 14.3333 13V14C14.3333 14.2761 14.1095 14.5 13.8333 14.5H12.8333C12.5572 14.5 12.3333 14.2761 12.3333 14V13C12.3333 12.7239 12.5572 12.5 12.8333 12.5ZM10.8333 13C10.8333 11.8954 11.7288 11 12.8333 11H13.8333C14.9379 11 15.8333 11.8954 15.8333 13V14C15.8333 15.1046 14.9379 16 13.8333 16H12.8333C11.7288 16 10.8333 15.1046 10.8333 14V13Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Weekly Warm-up
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Prompt to flex your design skills</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                    </div>
                                </ul>
                                <ul className="site-nav-dropdown-list site-nav-dropdown-grey-bg" data-site-nav-category="Inspiration">
                                    <p className="site-nav-dropdown-item site-nav-dropdown-category-padding site-nav-dropdown-item-title">Browse Categories</p>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Animation" href="/shots/popular/animation">Animation</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Branding" href="/shots/popular/branding">Branding</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Illustration" href="/shots/popular/illustration">Illustration</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Mobile" href="/shots/popular/mobile">Mobile</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Print" href="/shots/popular/print">Print</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Product Design" href="/shots/popular/product-design">Product Design</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Typography" href="/shots/popular/typography">Typography</a>
                                    </li>
                                    <li>
                                        <a className="site-nav-dropdown-category-padding" data-site-nav-element="Web Design" href="/shots/popular/web-design">Web Design</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Find Work" href="/jobs">Find Work</a>
                            <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list">
                                    <div data-site-nav-category="Find Work">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Job Board" href="/jobs">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M0.75 2.5C0.75 1.5335 1.5335 0.75 2.5 0.75H8.5C9.4665 0.75 10.25 1.5335 10.25 2.5V8.5C10.25 9.4665 9.4665 10.25 8.5 10.25H2.5C1.5335 10.25 0.75 9.4665 0.75 8.5V2.5ZM13.75 2.5C13.75 1.5335 14.5335 0.75 15.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V8.5C19.25 9.4665 18.4665 10.25 17.5 10.25H15.5C14.5335 10.25 13.75 9.4665 13.75 8.5V2.5ZM9.75 15.5C9.75 14.5335 10.5335 13.75 11.5 13.75H17.5C18.4665 13.75 19.25 14.5335 19.25 15.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H11.5C10.5335 19.25 9.75 18.4665 9.75 17.5V15.5ZM0.75 15.5C0.75 14.5335 1.5335 13.75 2.5 13.75H4.5C5.4665 13.75 6.25 14.5335 6.25 15.5V17.5C6.25 18.4665 5.4665 19.25 4.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V15.5Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Job Board
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Find your dream design job</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Freelance Projects" href="/freelance-jobs">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M1.25 8.5C1.25 7.5335 2.0335 6.75 3 6.75H14C14.9665 6.75 15.75 7.5335 15.75 8.5V14C15.75 16.8995 13.3995 19.25 10.5 19.25H6.5C3.60051 19.25 1.25 16.8995 1.25 14V8.5Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M6.25 0.833313C6.25 0.419099 5.91421 0.083313 5.5 0.083313C5.08579 0.083313 4.75 0.419099 4.75 0.833313V3.33331C4.75 3.74753 5.08579 4.08331 5.5 4.08331C5.91421 4.08331 6.25 3.74753 6.25 3.33331V0.833313Z" fill="currentColor" />
                                                        <path d="M9.58331 0.833313C9.58331 0.419099 9.24753 0.083313 8.83331 0.083313C8.4191 0.083313 8.08331 0.419099 8.08331 0.833313V3.33331C8.08331 3.74753 8.4191 4.08331 8.83331 4.08331C9.24753 4.08331 9.58331 3.74753 9.58331 3.33331V0.833313Z" fill="currentColor" />
                                                        <path d="M12.1667 0.083313C12.5809 0.083313 12.9167 0.419099 12.9167 0.833313V3.33331C12.9167 3.74753 12.5809 4.08331 12.1667 4.08331C11.7525 4.08331 11.4167 3.74753 11.4167 3.33331V0.833313C11.4167 0.419099 11.7525 0.083313 12.1667 0.083313Z" fill="currentColor" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M16 16C16.1693 16 16.3362 15.9895 16.5 15.9691C18.4732 15.723 20 14.0398 20 12C20 9.96019 18.4732 8.277 16.5 8.03095C16.3362 8.01052 16.1693 8 16 8H15V16H16ZM18.5 12C18.5 10.7905 17.6411 9.78164 16.5 9.55001V14.45C17.6411 14.2184 18.5 13.2095 18.5 12Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Freelance Projects
                                                        <div className="pro-flag margin-l-8">Pro+</div>
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">An exclusive list for contract work</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="padding-h-32">
                                            <hr />
                                        </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Design Leads" href="/projects">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="1.75" width="18.5" height="16.5" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M19 4L10 11L1 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Want freelance design projects?
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Get new leads in your inbox every day</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item yellow">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Pitch" href="/pro/pitch">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="4.25" y="0.75" width="11.5" height="18.5" rx="2.25" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M4.25 17C4.25 14.6528 6.15279 12.75 8.5 12.75H11.5C13.8472 12.75 15.75 14.6528 15.75 17C15.75 18.2426 14.7426 19.25 13.5 19.25H6.5C5.25736 19.25 4.25 18.2426 4.25 17Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <circle cx={10} cy={7} r="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Personalize your profile with video
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Introduce yourself to new clients with Pitch</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Learn Design" href="/learn">
                                <span>Learn Design</span>
                            </a>      <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list">
                                    <div data-site-nav-category="Learn Design">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Product Design Course" href="/courses/product-design?discount=design-course-25-off">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 20 22" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M4.375 20.375C3.71196 20.375 3.07607 20.1116 2.60723 19.6427C2.13839 19.1739 1.875 18.538 1.875 17.875V6.44165C1.87606 6.05378 1.96736 5.67148 2.14167 5.32498L3.80833 1.99165C3.86038 1.88819 3.94014 1.80123 4.03873 1.74046C4.13732 1.6797 4.25086 1.64752 4.36667 1.64752C4.48248 1.64752 4.59601 1.6797 4.6946 1.74046C4.79319 1.80123 4.87295 1.88819 4.925 1.99165L6.59167 5.32498C6.76598 5.67148 6.85727 6.05378 6.85833 6.44165V17.875C6.85835 18.5351 6.59724 19.1685 6.132 19.6369C5.66676 20.1052 5.03515 20.3706 4.375 20.375Z" fill="none" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M1.875 6.41669H6.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M1.875 16.4167H6.875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.875 1.625H11.875C11.1846 1.625 10.625 2.18464 10.625 2.875V19.125C10.625 19.8154 11.1846 20.375 11.875 20.375H16.875C17.5654 20.375 18.125 19.8154 18.125 19.125V2.875C18.125 2.18464 17.5654 1.625 16.875 1.625Z" fill="none" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M10.625 5.375H13.5417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.625 9.125H13.5417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.625 12.875H13.5417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M10.625 16.625H13.5417" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Certified Product Design Course
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Learn product design in just 16 weeks...</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="UI Design Course" href="/courses/ui-design?discount=ui-course-25-off">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M8 15L6 19H14L12 15H8Z" fill="#E3F3F1" stroke="#74C4BA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <rect x="0.75" y="3.75" width="18.5" height="11.5" rx="1.25" fill="#E3F3F1" stroke="#74C4BA" strokeWidth="1.5" />
                                                        <path d="M10.3929 6.93852L13.6189 1.54892C14.0545 0.821159 15.0158 0.615322 15.7112 1.1009C16.4049 1.58528 16.5441 2.55542 16.0147 3.21536L12.0816 8.11773L10.3929 6.93852Z" fill="#E3F3F1" stroke="#74C4BA" strokeWidth="1.5" />
                                                        <path d="M9.62285 7.34418C8.52118 7.55943 8.20332 8.14645 8.03211 8.98745C7.86089 9.82846 8.38044 12.4726 8.38044 12.4726C8.58093 12.1374 9.3261 11.3349 10.7029 10.8075C12.0797 10.2801 11.7624 8.8508 11.4317 8.20208C11.2878 7.82642 10.7245 7.12892 9.62285 7.34418Z" fill="#74C4BA" fillOpacity="0.13" stroke="#74C4BA" strokeWidth="1.5" strokeLinejoin="round" />
                                                        <path d="M4 19L16 19" stroke="#74C4BA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Introduction to UI Design
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">
                                                        Learn UI Design Basics and Figma Fundamentals...
                                                    </p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item yellow">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Browse our courses & workshops" href="/learn">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M15 7.50915L12.5 8.34249V7.50915C12.5 7.17763 12.3683 6.85969 12.1339 6.62527C11.8995 6.39085 11.5815 6.25916 11.25 6.25916H6.25C5.91848 6.25916 5.60054 6.39085 5.36612 6.62527C5.1317 6.85969 5 7.17763 5 7.50915V12.5092C5 12.8407 5.1317 13.1586 5.36612 13.393C5.60054 13.6275 5.91848 13.7592 6.25 13.7592H11.25C11.5815 13.7592 11.8995 13.6275 12.1339 13.393C12.3683 13.1586 12.5 12.8407 12.5 12.5092V11.6758L15 12.5092V7.50915Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5 2.00916H15C16.6569 2.00916 18 3.3523 18 5.00915V15.0092C18 16.666 16.6569 18.0092 15 18.0092H5C3.34315 18.0092 2 16.666 2 15.0092V5.00915C2 3.3523 3.34315 2.00916 5 2.00916Z" fill="none" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Browse our courses &amp; workshops
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Level up your skills with our interactive courses and workshops???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Go Pro" href="/pro">Go Pro</a>
                            <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list">
                                    <div data-site-nav-category="Go Pro">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="For Designers" href="/pro">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.80083 1.65L6.875 4.375L4.875 7.52083C4.71738 7.83675 4.62846 8.18247 4.6141 8.53524C4.59974 8.888 4.66025 9.23981 4.79167 9.5675C4.79167 9.5675 9.40584 18.75 10.0308 19.375C10.6558 18.75 15.2083 9.5675 15.2083 9.5675C15.3398 9.23981 15.4003 8.888 15.3859 8.53524C15.3715 8.18247 15.2826 7.83675 15.125 7.52083L13.125 4.375L14.2608 1.65C14.3368 1.55875 14.3853 1.44773 14.4005 1.32995C14.4157 1.21216 14.397 1.09249 14.3466 0.984941C14.2962 0.877391 14.2163 0.786416 14.1161 0.72267C14.0159 0.658924 13.8996 0.625045 13.7808 0.625H6.28083C6.16207 0.625045 6.04579 0.658924 5.94559 0.72267C5.84539 0.786416 5.76542 0.877391 5.71506 0.984941C5.66469 1.09249 5.64601 1.21216 5.6612 1.32995C5.67639 1.44773 5.72483 1.55875 5.80083 1.65Z" fill="currentColor" fillOpacity="0.15" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.21554 1.5L6.88981 3.1857C6.96575 3.37552 7.1496 3.5 7.35405 3.5H12.6459C12.8504 3.5 13.0342 3.37552 13.1102 3.18569L13.7844 1.5H6.21554ZM5.4971 3.74278C5.54249 3.85626 5.59753 3.9639 5.66104 4.06492L3.60878 7.48535C3.23331 8.11112 3.22849 8.89172 3.5962 9.52209L9.13621 19.0192C9.52209 19.6807 10.4779 19.6807 10.8638 19.0192L16.4038 9.52209C16.7715 8.89173 16.7667 8.11112 16.3912 7.48535L14.3389 4.06492C14.4024 3.9639 14.4575 3.85626 14.5029 3.74278L15.4514 1.37139C15.7142 0.714526 15.2304 0 14.523 0H5.47702C4.76956 0 4.2858 0.714527 4.54854 1.37139L5.4971 3.74278ZM7.35405 5H12.6459H13.1507L15.105 8.2571C15.1988 8.41354 15.2 8.60869 15.1081 8.76628L9.99999 17.523L4.89187 8.76628C4.79994 8.60869 4.80115 8.41354 4.89502 8.2571L6.84927 5H7.35405ZM8.58579 7.73569C8.96086 7.36062 9.46957 7.1499 10 7.1499C10.5304 7.1499 11.0391 7.36062 11.4142 7.73569C11.7893 8.11076 12 8.61947 12 9.1499C12 9.68034 11.7893 10.189 11.4142 10.5641C11.2227 10.7556 10.9963 10.9043 10.75 11.004V13.7499C10.75 14.1641 10.4142 14.4999 10 14.4999C9.58579 14.4999 9.25 14.1641 9.25 13.7499V11.004C9.00368 10.9043 8.77731 10.7556 8.58579 10.5641C8.21071 10.189 8 9.68034 8 9.1499C8 8.61947 8.21071 8.11076 8.58579 7.73569ZM10.3536 9.50346C10.2598 9.59722 10.1326 9.6499 10 9.6499C9.86739 9.6499 9.74021 9.59722 9.64645 9.50346C9.55268 9.40969 9.5 9.28251 9.5 9.1499C9.5 9.01729 9.55268 8.89012 9.64645 8.79635C9.74022 8.70258 9.86739 8.6499 10 8.6499C10.1326 8.6499 10.2598 8.70258 10.3536 8.79635C10.4473 8.89012 10.5 9.01729 10.5 9.1499C10.5 9.28251 10.4473 9.40969 10.3536 9.50346Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        For Designers
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Portfolio creation made easy</p>
                                                </div>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="For Freelancers" href="/projects">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} viewBox="0 0 20 22" fill="none" className="site-nav-dropdown-icon">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.99999 2C1.01482 4.13455 0.223755 8.17789 4.7902 7.53235L3.5 8.5L4 10H3V18C3 19.1046 3.89543 20 5 20H12C13.1046 20 14 19.1046 14 18V10H13L14.5 5.5L14 2L11 4L9 9.5L13 10H7.5L5.5 7L5.28504 7.16122C5.76869 6.48755 6.24377 5.24377 5 4L1.99999 2Z" fill="currentColor" fillOpacity="0.15" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.7299 1.48449C14.682 1.21679 14.4929 0.996026 14.2357 0.907531C13.9786 0.819036 13.6937 0.876681 13.4911 1.05818L10.4411 3.79151C10.3472 3.87571 10.276 3.98224 10.2342 4.10126L8.43534 9.21686H8.36303L6.47967 6.45549C6.56825 6.14342 6.60427 5.81828 6.5858 5.49347C6.56388 5.10793 6.46561 4.73064 6.29678 4.38348C6.07936 3.89473 5.72683 3.47813 5.28051 3.18282L5.28054 3.18279L5.27427 3.17873C4.74835 2.83823 4.37325 2.69769 4.17254 2.62248L4.17253 2.62248L4.17253 2.62248C4.11611 2.60134 4.07347 2.58536 4.04514 2.57156C3.82759 2.46558 3.42515 2.20273 2.16736 1.07491C1.99274 0.918328 1.75492 0.852455 1.52463 0.896873C1.29433 0.941291 1.09807 1.09089 0.99421 1.30117C0.571373 2.15729 0.351425 3.09929 0.351425 4.05413C0.351425 5.00027 0.567381 5.93381 0.982697 6.78366C1.13009 7.13636 1.34541 7.45675 1.6165 7.72651C1.89431 8.00296 2.22498 8.22059 2.58876 8.36639C2.72967 8.42287 2.87443 8.46812 3.02169 8.5019L3.10232 9.21686H3.02499C2.61078 9.21686 2.27499 9.55265 2.27499 9.96686V16.6335C2.27499 17.827 2.7491 18.9716 3.59301 19.8155C4.43693 20.6594 5.58152 21.1335 6.77499 21.1335H10.525V20.3834L10.5267 21.1335C11.7189 21.1309 12.8615 20.6561 13.7045 19.8131C14.3691 19.1486 14.8048 18.2979 14.9608 17.3835H15.525C16.608 17.3835 17.6466 16.9533 18.4123 16.1875C19.1781 15.4218 19.6083 14.3832 19.6083 13.3002C19.6083 12.2172 19.1781 11.1786 18.4123 10.4128C17.6466 9.64706 16.608 9.21685 15.525 9.21685H14.275L14.2703 9.21686H14.1848L15.399 5.77452C15.4422 5.65211 15.4528 5.52059 15.4299 5.39282L14.7299 1.48449ZM13.1161 10.7169C13.122 10.7169 13.128 10.7169 13.134 10.7169H13.525V16.6327C13.523 17.4279 13.2062 18.1901 12.6439 18.7524C12.0815 19.3148 11.3194 19.6316 10.5241 19.6335H6.77499C5.97934 19.6335 5.21628 19.3175 4.65367 18.7549C4.09106 18.1922 3.77499 17.4292 3.77499 16.6335V10.7169H7.96602C7.96691 10.7169 7.9678 10.7169 7.96869 10.7169H8.95776C8.96372 10.7169 8.96968 10.7169 8.97563 10.7169H13.1161ZM12.5942 9.21686L13.9185 5.46233L13.4906 3.07291L11.5854 4.78024L10.0254 9.21686H12.5942ZM6.54736 9.21686L5.60911 7.8412C5.38857 8.0368 5.13922 8.1982 4.86934 8.31948C4.75721 8.36986 4.64226 8.413 4.5252 8.44872L4.61183 9.21686H6.54736ZM3.95484 7.04759C4.05775 7.02677 4.15827 6.99452 4.25451 6.95127C4.42814 6.87325 4.58427 6.76103 4.71357 6.62132C4.78039 6.54912 4.83933 6.47034 4.88958 6.38634C4.91142 6.27716 4.95742 6.17277 5.02594 6.08188C5.07675 5.9194 5.09791 5.74893 5.08822 5.57864C5.07741 5.38859 5.02841 5.20266 4.94415 5.03197C4.93903 5.02161 4.93416 5.01113 4.92953 5.00055C4.82898 4.77069 4.66446 4.57461 4.45562 4.43565C4.07128 4.18702 3.95282 4.14541 3.79607 4.09035C3.69894 4.05623 3.5871 4.01695 3.38819 3.92004C3.06613 3.76315 2.68024 3.49914 1.99116 2.91454C1.89865 3.28608 1.85143 3.66873 1.85143 4.05413C1.85143 4.77858 2.0183 5.4933 2.33911 6.14284C2.34716 6.15913 2.35461 6.17571 2.36145 6.19254C2.43314 6.36889 2.53963 6.52899 2.67456 6.66326C2.80949 6.79754 2.97011 6.90324 3.1468 6.97406C3.23411 7.00905 3.32445 7.03517 3.41648 7.05217C3.47646 7.02856 3.54049 7.01236 3.6076 7.00479C3.72932 6.99106 3.84753 7.00729 3.95484 7.04759ZM15.525 15.8835H15.025V10.7169H15.525C16.2101 10.7169 16.8672 10.989 17.3517 11.4735C17.8362 11.958 18.1083 12.615 18.1083 13.3002C18.1083 13.9853 17.8362 14.6424 17.3517 15.1269C16.8672 15.6113 16.2101 15.8835 15.525 15.8835Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        For Freelancers
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Fresh leads in your inbox every day</p>
                                                </div>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="For Teams" href="/pro/teams">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <g clipPath="url(#clip0_11298_16616)">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.81932 8.99318C3.17466 8.34852 2.8125 7.47418 2.8125 6.5625C2.8125 5.65082 3.17466 4.77648 3.81932 4.13182C4.46398 3.48716 5.33832 3.125 6.25 3.125C7.16168 3.125 8.03602 3.48716 8.68068 4.13182C9.32534 4.77648 9.6875 5.65082 9.6875 6.5625C9.6875 7.47418 9.32534 8.34852 8.68068 8.99318C8.03602 9.63784 7.16168 10 6.25 10C5.33832 10 4.46398 9.63784 3.81932 8.99318ZM12.7838 10.4262C12.2563 9.89879 11.96 9.18342 11.96 8.4375C11.96 7.69158 12.2563 6.97621 12.7838 6.44876C13.3112 5.92132 14.0266 5.625 14.7725 5.625C15.5184 5.625 16.2338 5.92132 16.7612 6.44876C17.2887 6.97621 17.585 7.69158 17.585 8.4375C17.585 9.18342 17.2887 9.89879 16.7612 10.4262C16.2338 10.9537 15.5184 11.25 14.7725 11.25C14.0266 11.25 13.3112 10.9537 12.7838 10.4262Z" fill="currentColor" fillOpacity="0.15" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.28899 3.60149C4.0743 2.81618 5.13941 2.375 6.25 2.375C7.36059 2.375 8.4257 2.81618 9.21101 3.60149C9.99632 4.3868 10.4375 5.45191 10.4375 6.5625C10.4375 7.67309 9.99632 8.7382 9.21101 9.52351C8.69482 10.0397 8.05774 10.4072 7.36632 10.5985C8.64245 10.8254 9.82874 11.4381 10.7578 12.3672C11.9534 13.5627 12.625 15.1842 12.625 16.875C12.625 17.2892 12.2892 17.625 11.875 17.625C11.4608 17.625 11.125 17.2892 11.125 16.875C11.125 15.5821 10.6114 14.3421 9.69715 13.4279C8.78291 12.5136 7.54293 12 6.25 12C4.95707 12 3.71709 12.5136 2.80285 13.4279C1.88861 14.3421 1.375 15.5821 1.375 16.875C1.375 17.2892 1.03921 17.625 0.625 17.625C0.210786 17.625 -0.125 17.2892 -0.125 16.875C-0.125 15.1842 0.54665 13.5627 1.74219 12.3672C2.67126 11.4381 3.85755 10.8254 5.13368 10.5985C4.44226 10.4072 3.80518 10.0397 3.28899 9.52351C2.50368 8.7382 2.0625 7.67309 2.0625 6.5625C2.0625 5.45191 2.50368 4.3868 3.28899 3.60149ZM6.25 3.875C5.53723 3.875 4.85365 4.15815 4.34965 4.66215C3.84565 5.16615 3.5625 5.84973 3.5625 6.5625C3.5625 7.27527 3.84565 7.95885 4.34965 8.46285C4.85365 8.96685 5.53723 9.25 6.25 9.25C6.96277 9.25 7.64635 8.96685 8.15035 8.46285C8.65435 7.95885 8.9375 7.27527 8.9375 6.5625C8.9375 5.84973 8.65435 5.16615 8.15035 4.66215C7.64635 4.15815 6.96277 3.875 6.25 3.875ZM12.2534 5.91843C12.9215 5.25033 13.8277 4.875 14.7725 4.875C15.7173 4.875 16.6235 5.25033 17.2916 5.91843C17.9597 6.58653 18.335 7.49267 18.335 8.4375C18.335 9.38233 17.9597 10.2885 17.2916 10.9566C16.9686 11.2796 16.5899 11.5341 16.1782 11.7109C16.7677 11.8716 17.3271 12.1325 17.8314 12.4839C18.539 12.9769 19.1171 13.6336 19.5164 14.398C19.9158 15.1625 20.1245 16.0121 20.125 16.8745C20.1252 17.2887 19.7896 17.6247 19.3754 17.6249C18.9612 17.6251 18.6252 17.2895 18.625 16.8753C18.6247 16.2545 18.4744 15.6429 18.1869 15.0925C17.8994 14.5422 17.4833 14.0695 16.9739 13.7146C16.4645 13.3596 15.8769 13.133 15.2611 13.0539C14.6452 12.9748 14.0194 13.0456 13.4369 13.2603C13.0482 13.4036 12.617 13.2046 12.4738 12.816C12.3305 12.4273 12.5295 11.9961 12.9181 11.8529C13.0652 11.7987 13.2143 11.7511 13.3649 11.7101C12.9539 11.5333 12.5759 11.2791 12.2534 10.9566C11.5853 10.2885 11.21 9.38233 11.21 8.4375C11.21 7.49267 11.5853 6.58653 12.2534 5.91843ZM14.7725 6.375C14.2255 6.375 13.7009 6.5923 13.3141 6.97909C12.9273 7.36589 12.71 7.89049 12.71 8.4375C12.71 8.98451 12.9273 9.50911 13.3141 9.89591C13.7009 10.2827 14.2255 10.5 14.7725 10.5C15.3195 10.5 15.8441 10.2827 16.2309 9.89591C16.6177 9.50911 16.835 8.98451 16.835 8.4375C16.835 7.89049 16.6177 7.36589 16.2309 6.97909C15.8441 6.5923 15.3195 6.375 14.7725 6.375Z" fill="currentColor" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_11298_16616">
                                                                <rect width={20} height={20} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        For Teams
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Build your team???s pipeline or profile</p>
                                                </div>
                                            </a>            </li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Design Files" href="/marketplace">Design Files</a>
                            <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list">
                                    <div data-site-nav-category="Design Files">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Discover" href="/marketplace">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={21} viewBox="0 0 21 21" fill="currentColor" className="site-nav-dropdown-icon">
                                                        <path d="M14.6161 1.44455C15.1043 0.956391 15.8957 0.956391 16.3839 1.44455L19.5659 4.62653C20.054 5.11468 20.054 5.90614 19.5659 6.39429L16.3839 9.57627C15.8957 10.0644 15.1043 10.0644 14.6161 9.57627L11.4341 6.39429C10.946 5.90614 10.946 5.11468 11.4341 4.62653L14.6161 1.44455L14.0963 0.924774L14.6161 1.44455ZM0.75 3C0.75 2.30965 1.30964 1.75 2 1.75H7C7.69036 1.75 8.25 2.30965 8.25 3V8C8.25 8.69036 7.69036 9.25 7 9.25H2C1.30964 9.25 0.75 8.69036 0.75 8V3ZM0.75 14C0.75 13.3096 1.30964 12.75 2 12.75H7C7.69036 12.75 8.25 13.3096 8.25 14V19C8.25 19.6904 7.69036 20.25 7 20.25H2C1.30964 20.25 0.75 19.6904 0.75 19V14ZM11.75 14C11.75 13.3096 12.3096 12.75 13 12.75H18C18.6904 12.75 19.25 13.3096 19.25 14V19C19.25 19.6904 18.6904 20.25 18 20.25H13C12.3096 20.25 11.75 19.6904 11.75 19V14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Discover
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">A marketplace of digital assets???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Graphics" href="/marketplace/graphics">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={20} viewBox="0 0 19 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M11.25 6C11.25 8.8995 8.8995 11.25 6 11.25C3.10051 11.25 0.75 8.8995 0.75 6C0.75 3.10051 3.10051 0.75 6 0.75C8.8995 0.75 11.25 3.10051 11.25 6ZM14.5762 12.2955L17.5713 17.3641C18.0636 18.1974 17.463 19.25 16.4951 19.25H10.5049C9.53702 19.25 8.93635 18.1974 9.42874 17.3641L12.4238 12.2954C12.9077 11.4767 14.0923 11.4767 14.5762 12.2955Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Graphics
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Icons, Illustrations, Patterns, Textures???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Fonts" href="/marketplace/fonts">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="currentColor" className="site-nav-dropdown-icon">
                                                        <path d="M0.760205 8.3167C0.692108 8.72528 0.968123 9.1117 1.3767 9.1798C1.78528 9.24789 2.1717 8.97188 2.2398 8.5633L0.760205 8.3167ZM6.46 4.1L6.35393 3.35754L6.35393 3.35754L6.46 4.1ZM17.636 1.3975C17.8555 1.04625 17.7488 0.583534 17.3975 0.364001C17.0462 0.144469 16.5835 0.251248 16.364 0.602501L17.636 1.3975ZM2.6002 13.3786L3.26145 13.7325L3.26145 13.7325L2.6002 13.3786ZM10.8001 11.05C11.2143 11.05 11.5501 10.7142 11.5501 10.3C11.5501 9.88579 11.2143 9.55 10.8001 9.55V11.05ZM1.5 8.44C2.2398 8.5633 2.23973 8.56369 2.23967 8.56406C2.23965 8.56416 2.23959 8.56452 2.23955 8.56474C2.23948 8.56516 2.23942 8.56553 2.23937 8.56584C2.23926 8.56647 2.23919 8.56689 2.23915 8.56708C2.23908 8.56748 2.23916 8.56702 2.2394 8.56574C2.23988 8.56316 2.24099 8.55727 2.24283 8.54828C2.24651 8.53028 2.25307 8.49993 2.26323 8.45883C2.28357 8.3765 2.31809 8.25191 2.37228 8.09768C2.48109 7.78799 2.66639 7.36673 2.96914 6.92941C3.56332 6.07115 4.62831 5.11928 6.56607 4.84246L6.35393 3.35754C3.95169 3.70072 2.53668 4.91885 1.73586 6.07559C1.34111 6.64577 1.10016 7.19326 0.957092 7.60045C0.885345 7.80465 0.837528 7.97553 0.807009 8.09906C0.791733 8.16089 0.78074 8.21107 0.773218 8.24786C0.769456 8.26627 0.766558 8.28135 0.764423 8.29288C0.763356 8.29865 0.762479 8.30354 0.76178 8.30752C0.761431 8.30951 0.761126 8.31127 0.760864 8.3128C0.760733 8.31357 0.760612 8.31427 0.760503 8.31492C0.760448 8.31525 0.760373 8.31569 0.760346 8.31586C0.760274 8.31629 0.760205 8.3167 1.5 8.44ZM6.56607 4.84246C7.57053 4.69897 8.51421 4.73293 9.44844 4.79966C10.3572 4.86457 11.3189 4.9681 12.2291 4.92673C13.1673 4.88408 14.1111 4.68878 15.0403 4.1335C15.9638 3.58169 16.817 2.70787 17.636 1.3975L16.364 0.602501C15.633 1.77213 14.9362 2.44831 14.2709 2.84588C13.6114 3.23997 12.9277 3.39342 12.1609 3.42827C11.3661 3.4644 10.5453 3.37418 9.55531 3.30347C8.59079 3.23457 7.51947 3.19103 6.35393 3.35754L6.56607 4.84246ZM5.14106 4.37183C5.73972 5.91126 6.30914 8.38787 6.44475 10.6859L7.94214 10.5975C7.79793 8.15371 7.19797 5.5225 6.53906 3.82817L5.14106 4.37183ZM6.44475 10.6859C6.53354 12.1906 6.43052 13.5336 6.08761 14.4692C5.9185 14.9307 5.70693 15.2489 5.47375 15.4482C5.25397 15.636 4.97943 15.75 4.60006 15.75V17.25C5.3231 17.25 5.94669 17.0172 6.44832 16.5885C6.93653 16.1712 7.26962 15.6031 7.496 14.9854C7.94408 13.7629 8.03533 12.1768 7.94214 10.5975L6.44475 10.6859ZM4.60006 15.75C3.58083 15.75 3.25531 15.368 3.13436 15.0743C2.97657 14.6911 3.03884 14.1484 3.26145 13.7325L1.93896 13.0247C1.56135 13.7302 1.37795 14.7483 1.74734 15.6454C2.15357 16.632 3.1281 17.25 4.60006 17.25V15.75ZM3.26145 13.7325C3.78686 12.7509 5.11165 11.845 7.3475 11.3757L7.03939 9.90771C4.61144 10.4173 2.76728 11.4771 1.93896 13.0247L3.26145 13.7325ZM7.3475 11.3757C8.34386 11.1666 9.49864 11.05 10.8001 11.05V9.55C9.41122 9.55 8.15172 9.67425 7.03939 9.90771L7.3475 11.3757Z" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Fonts
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Display, Script, Sans Serif, Serif???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item yellow">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Templates" href="/marketplace/templates">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 7H19V5.5H1V7H7V19H8.5V7Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Templates
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Mock Ups, Social Media, Presentations???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="3D" href="/marketplace/3d">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.62528 0.682372C9.34091 0.361573 10.1595 0.361573 10.8751 0.682372L19.0409 4.34292C19.1081 4.37121 19.1704 4.40901 19.2259 4.45464C19.2615 4.48385 19.2942 4.51615 19.3236 4.55105C19.4354 4.68376 19.5002 4.85399 19.5002 5.0345V14.9484C19.5036 15.0995 19.4609 15.2477 19.3798 15.3732C19.3222 15.4624 19.2452 15.54 19.1516 15.5992C19.1167 15.6213 19.0798 15.6407 19.0414 15.6569L10.8751 19.3176C10.1595 19.6384 9.34091 19.6384 8.62528 19.3176L0.459072 15.6569C0.420262 15.6406 0.383117 15.621 0.347962 15.5987C0.255151 15.5399 0.178767 15.4629 0.121449 15.3746C0.0397873 15.2488 -0.00317647 15.1001 0.000183103 14.9486V5.0345C0.000183103 4.80088 0.106999 4.59219 0.274458 4.45464C0.330003 4.40902 0.392221 4.37122 0.459426 4.34293L8.62528 0.682372ZM10.2615 2.05114C9.93622 1.90532 9.56415 1.90532 9.23886 2.05114L2.58367 5.0345L9.75018 8.24707L16.9167 5.0345L10.2615 2.05114ZM9.00018 17.8419L1.50018 14.4798V6.19261L9.00018 9.55468V17.8419ZM10.5002 17.8419L18.0002 14.4798V6.19261L10.5002 9.55468V17.8419Z" fill="currentColor" />
                                                        <path d="M1 4.80823L1.03864 4.8254L9.18189 1.17498C9.70235 0.941673 10.2977 0.941673 10.8181 1.17498L18.9614 4.8254L19 4.80823V14.8082L10 18.3082L1 14.8082V4.80823Z" fill="currentColor" fillOpacity="0.2" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        3D
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Characters, Objects, Textures???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Themes" href="/marketplace/themes">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="3.25" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5ZM0 6.25V7.75H20V6.25H0ZM8 4C8 4.55228 7.55228 5 7 5C6.44772 5 6 4.55228 6 4C6 3.44772 6.44772 3 7 3C7.55228 3 8 3.44772 8 4ZM10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3C9.44771 3 9 3.44772 9 4C9 4.55228 9.44771 5 10 5Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Themes
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">WordPress, Shopify, Bootstrap, HTML5???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Add Ons" href="/marketplace/add-ons">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H7C7.69036 0.75 8.25 1.30964 8.25 2V7C8.25 7.69036 7.69036 8.25 7 8.25H2C1.30964 8.25 0.75 7.69036 0.75 7V2ZM0.75 13C0.75 12.3096 1.30964 11.75 2 11.75H7C7.69036 11.75 8.25 12.3096 8.25 13V18C8.25 18.6904 7.69036 19.25 7 19.25H2C1.30964 19.25 0.75 18.6904 0.75 18V13ZM11.75 13C11.75 12.3096 12.3096 11.75 13 11.75H18C18.6904 11.75 19.25 12.3096 19.25 13V18C19.25 18.6904 18.6904 19.25 18 19.25H13C12.3096 19.25 11.75 18.6904 11.75 18V13Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                        <path d="M16.25 1C16.25 0.585786 15.9142 0.25 15.5 0.25C15.0858 0.25 14.75 0.585786 14.75 1V3.75H12C11.5858 3.75 11.25 4.08579 11.25 4.5C11.25 4.91421 11.5858 5.25 12 5.25H14.75V8C14.75 8.41421 15.0858 8.75 15.5 8.75C15.9142 8.75 16.25 8.41421 16.25 8V5.25H19C19.4142 5.25 19.75 4.91421 19.75 4.5C19.75 4.08579 19.4142 3.75 19 3.75H16.25V1Z" fill="currentColor" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Add Ons
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Procreate, Affinity, Photoshop, InDesign???</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>            </li>
                                        <li className="padding-h-32">
                                            <hr />
                                        </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Open a Shop" target="_blank" href="https://creativemarket.com/sell?utm_source=Dribbble&utm_medium=navigation&utm_campaign=marketplace&uid=3fa059c4-fec8-40cb-8dfb-f804a410b815">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="site-nav-dropdown-icon">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 12.3625L11.6066 23.6762C11.9971 24.0667 12.6303 24.0667 13.0208 23.6762L23.6762 13.0208C23.8707 12.8263 23.9765 12.5602 23.9687 12.2851L24 1.28571C23.9849 0.755822 23.2132 0.0151391 22.6834 0L11.6839 0.000408484C11.4089 -0.00744935 11.1428 0.098349 10.9483 0.292893L0.292893 10.9483C-0.0976312 11.3388 -0.0976309 11.9719 0.292893 12.3625ZM20.0919 3.87719C20.4824 4.26771 20.4824 4.90088 20.0919 5.2914C19.7014 5.68192 19.0682 5.68192 18.6777 5.2914C18.2871 4.90087 18.2871 4.26771 18.6777 3.87719C19.0682 3.48666 19.7014 3.48666 20.0919 3.87719ZM12.3249 6.74473C11.547 9.28963 9.79622 10.8869 7.32482 11.6549C9.79627 12.4223 11.547 14.0203 12.3249 16.5654C13.1027 14.0203 14.8534 12.4223 17.3248 11.6549C14.8534 10.8869 13.1027 9.28961 12.3249 6.74473Z" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Open a Shop
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Earn money doing what you love</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="currentColor" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M12.9498 2.05017C13.5021 2.05017 13.9498 2.49789 13.9498 3.05017V11.7168C13.9498 12.2691 13.5021 12.7168 12.9498 12.7168C12.3975 12.7168 11.9498 12.2691 11.9498 11.7168V5.46438L3.7574 13.6568C3.36688 14.0473 2.73371 14.0473 2.34319 13.6568C1.95266 13.2662 1.95266 12.6331 2.34319 12.2426L10.5356 4.05017H4.28312C3.73084 4.05017 3.28312 3.60246 3.28312 3.05017C3.28312 2.49789 3.73084 2.05017 4.28312 2.05017L12.9498 2.05017Z" />
                                                </svg>
                                            </a>          </li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li className="site-nav-desktop-item site-nav-hover-item" data-site-nav-category="Top Nav">
                            <a data-site-nav-element="Hire Designers" href="/hiring">Hire Designers</a>
                            <div className="site-nav-hover-menu">
                                <ul className="site-nav-dropdown-list">
                                    <div data-site-nav-category="Hire Designers">
                                        <li className="site-nav-dropdown-item purple">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Designer Search" href="/designers">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="site-nav-dropdown-icon">
                                                        <path d="M14.25 10C14.25 12.3472 12.3472 14.25 10 14.25C7.65279 14.25 5.75 12.3472 5.75 10C5.75 7.65279 7.65279 5.75 10 5.75C12.3472 5.75 14.25 7.65279 14.25 10ZM5.25 17C5.25 18.2426 4.24264 19.25 3 19.25C1.75736 19.25 0.75 18.2426 0.75 17C0.75 15.7574 1.75736 14.75 3 14.75C4.24264 14.75 5.25 15.7574 5.25 17ZM5.25 3C5.25 4.24264 4.24264 5.25 3 5.25C1.75736 5.25 0.75 4.24264 0.75 3C0.75 1.75736 1.75736 0.75 3 0.75C4.24264 0.75 5.25 1.75736 5.25 3ZM19.25 17C19.25 18.2426 18.2426 19.25 17 19.25C15.7574 19.25 14.75 18.2426 14.75 17C14.75 15.7574 15.7574 14.75 17 14.75C18.2426 14.75 19.25 15.7574 19.25 17ZM19.25 3C19.25 4.24264 18.2426 5.25 17 5.25C15.7574 5.25 14.75 4.24264 14.75 3C14.75 1.75736 15.7574 0.75 17 0.75C18.2426 0.75 19.25 1.75736 19.25 3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Designer Search
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Find, contact, and hire designers</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item red">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="List my Job Opening" href="/jobs/new">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" className="site-nav-dropdown-icon small-icon">
                                                        <path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        List my Job Opening
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">The #1 job board for creatives</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                        <li className="site-nav-dropdown-item green">
                                            <a className="site-nav-dropdown-item-padding site-nav-dropdown-item-hover flex" data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">
                                                <div className="site-nav-dropdown-icon-container">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" className="site-nav-dropdown-icon small-icon">
                                                        <path d="M7 0.75L7 13.25M13.25 7L0.75 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </div>
                                                <div className="site-nav-dropdown-item-text">
                                                    <div className="site-nav-dropdown-item-title">
                                                        Post a Freelance Project
                                                    </div>
                                                    <p className="site-nav-dropdown-item-desc">Board for freelance &amp; contract work</p>
                                                </div>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" className="site-nav-dropdown-arrow icon-12 fill-current">
                                                    <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z" />
                                                </svg>
                                            </a>          </li>
                                    </div>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="site-nav-mobile-only align-center site-nav-mobile-menu-toggle" role="navigation" aria-label="Toggle Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none" role="img" className="icon js-site-nav-mobile-menu-open site-nav-mobile-menu-open icon-18 fill-current">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 2C0 1.37868 0.50368 0.875 1.125 0.875H16.875C17.4963 0.875 18 1.37868 18 2C18 2.62132 17.4963 3.125 16.875 3.125H1.125C0.50368 3.125 0 2.62132 0 2ZM0 8C0 7.37868 0.50368 6.875 1.125 6.875H16.875C17.4963 6.875 18 7.37868 18 8C18 8.62132 17.4963 9.125 16.875 9.125H1.125C0.50368 9.125 0 8.62132 0 8ZM1.125 12.875C0.50368 12.875 0 13.3787 0 14C0 14.6213 0.50368 15.125 1.125 15.125H16.875C17.4963 15.125 18 14.6213 18 14C18 13.3787 17.4963 12.875 16.875 12.875H1.125Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" role="img" className="icon js-site-nav-mobile-menu-close site-nav-mobile-menu-close icon-24 fill-current">
                        <path d="M7.22876 5.81455C6.83824 5.42403 6.20507 5.42403 5.81455 5.81455C5.42402 6.20507 5.42402 6.83824 5.81455 7.22876L9.58578 11L5.81455 14.7712C5.42402 15.1618 5.42402 15.7949 5.81455 16.1854C6.20507 16.576 6.83824 16.576 7.22876 16.1854L11 12.4142L14.7712 16.1854C15.1618 16.576 15.7949 16.576 16.1854 16.1854C16.576 15.7949 16.576 15.1618 16.1854 14.7712L12.4142 11L16.1854 7.22876C16.576 6.83824 16.576 6.20507 16.1854 5.81455C15.7949 5.42403 15.1618 5.42403 14.7712 5.81455L11 9.58579L7.22876 5.81455Z" />
                    </svg>
                </div>
                <div className="site-nav-mobile-only site-nav-mobile-logo" data-site-nav-category="Top Nav">
                    <a href="/" data-site-nav-element="Logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width={76} height={30} viewBox="0 0 76 19" fill="none" className="site-nav-logo fill-current">
                            <title>Dribbble: the community for graphic design</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M75.8822 14.657C72.7063 20.0415 67.6766 18.4791 66.166 17.2558C65.5231 17.692 64.3958 18.6481 62.8926 18.5377C59.6913 18.3027 58.5449 13.7279 58.5449 13.7279C58.5679 13.7462 57.5913 14.0649 57.0635 14.0592C57.0567 15.4008 55.897 18.6056 52.7672 18.5646C49.2551 18.5188 48.5411 13.2864 48.5411 13.2864C48.5411 13.2864 48.1916 13.7717 46.8627 14.2551C46.9296 13.2244 46.8807 18.4077 42.6713 18.4839C39.3435 18.5442 38.4452 13.2057 38.4452 13.2057C38.4452 13.2057 37.8679 13.8054 36.7491 14.0134C36.8202 12.9659 36.7046 18.5015 32.4947 18.4839C29.6497 18.4721 28.6775 15.1954 28.7531 14.7406C28.8496 14.161 27.7916 18.5654 25.0281 18.4968C23.8877 18.4633 23.0375 17.6376 22.504 16.5368C21.7898 17.354 20.7529 18.4968 19.5897 18.4968C17.5017 18.4968 16.5812 16.7504 16.7371 11.7624C16.7504 11.1708 16.7077 10.9381 16.1196 10.8496C15.7666 10.7907 15.4051 10.6792 15.0226 10.6204C14.9 11.0295 13.8602 18.3637 10.2847 18.5029C9.08519 18.5496 8.4293 17.5105 7.89066 16.7393C7.06497 17.8316 5.97501 18.5377 4.42227 18.5377C1.79205 18.5377 0 16.4114 0 13.7885C0 11.1655 1.79205 9.03942 4.42227 9.03942C4.88732 9.03942 5.01787 9.10608 5.44272 9.23004C4.569 1.27504 6.63238 0.0317866 8.43739 0.0317866C10.1703 0.0317866 13.1308 4.05384 8.96512 14.2559C9.88998 17.2989 11.8838 17.1268 12.8419 10.8626C13.0369 9.58927 12.5155 7.87099 13.3265 7.63117C14.809 7.19289 14.9663 8.50787 15.6614 8.72697C16.3964 8.95853 16.8254 8.93592 17.531 9.08327C18.7367 9.31873 19.2072 9.96643 19.0603 11.409C18.8839 13.2343 18.5753 15.891 19.5162 16.2148C20.1947 16.45 21.4335 15.0429 21.6509 14.273C21.8682 13.5031 21.9136 13.2396 21.9329 12.6749C21.9623 11.468 21.9992 10.5833 22.205 9.67055C22.2931 9.31736 22.3935 9.08347 22.7931 9.06748C23.1219 9.0591 23.7232 8.96009 23.9879 9.16611C24.3407 9.43119 24.2966 9.70017 24.2561 10.4081C23.8458 20.5015 27.0038 15.4628 27.9454 11.4283C27.6101 6.86623 27.8403 0.115326 30.6991 0.00210112C32.1859 -0.0567822 32.8432 1.13431 32.9155 2.02335C33.12 4.53433 31.9745 8.69372 30.468 11.4909C29.607 17.1984 34.2325 18.3269 34.9722 13.7712C33.762 13.1958 32.4541 10.8668 33.5184 9.73181C34.1156 9.09483 36.6015 10.0099 36.6422 12.0057C37.8616 11.6796 38.0244 10.9911 38.0413 11.1052C37.7061 6.54312 38.017 0.115385 40.876 0.00215941C42.3626 -0.0567239 43.0198 1.13437 43.0921 2.02341C43.2966 4.53438 42.1511 8.69378 40.6448 11.491C39.7837 17.1984 44.4093 18.327 45.1488 13.7713C44.2528 13.5984 42.3614 11.1212 43.4527 9.73187C44.0359 8.98944 46.5127 10.5334 46.79 12.0718C47.9614 11.7403 48.1205 11.0737 48.1373 11.1859C47.802 6.62397 48.1129 0.196235 50.9719 0.0830097C52.4585 0.0241264 53.1157 1.21522 53.188 2.10426C53.3925 4.61523 52.247 8.77471 50.7405 11.5719C49.8796 17.2794 54.5051 18.4077 55.2448 13.852C54.0135 13.647 52.2636 11.0314 53.672 9.69333C54.2347 9.15869 56.3848 10.5465 56.8881 12.1298C57.5874 12.1029 58.0227 11.8617 58.116 11.8374C56.9996 6.4818 57.8307 0.0558781 60.9062 0.00223793C62.5685 -0.0267262 64.1936 0.900905 63.4803 5.99604C62.7994 10.8574 60.3519 12.8975 60.3576 12.9287C60.5 13.5111 61.7559 18.3851 64.9185 15.8134C64.7548 15.4427 64.5909 15.064 64.4993 14.6052C63.9751 11.9327 65.0047 8.91409 67.8032 8.42622C69.4066 8.14671 70.917 8.92734 71.1558 10.6872C71.5487 13.5669 68.9484 15.6524 67.9596 16.1048C67.5167 15.8532 71.9742 18.712 74.6196 12.9829C74.773 12.6558 74.9579 12.6835 75.1975 12.8521C75.3667 12.9712 76.3305 13.8842 75.8822 14.657ZM6.33552 13.0809C6.20092 12.6785 5.92469 11.7918 5.82701 11.4076C5.28905 10.9398 4.90507 10.8638 4.21455 10.8638C2.68 10.8638 1.77679 12.2826 1.77679 13.8125C1.77679 15.3423 2.76077 16.7613 4.29533 16.7613C5.6252 16.7613 6.63735 15.8571 6.94615 14.5771C6.73001 14.0781 6.5156 13.6195 6.33552 13.0809ZM8.39979 2.13753C7.32153 2.13753 6.95576 4.70973 7.02674 6.90406C7.08953 8.84411 7.63164 10.5521 7.91286 11.3174C7.98426 11.4133 7.971 11.3509 8.03474 11.4526C9.90694 7.35053 9.13041 2.13753 8.39979 2.13753ZM30.8531 2.21833C29.4595 2.0585 29.4685 7.86389 29.6415 9.16611C30.3653 8.00823 31.6226 2.53009 30.8531 2.21833ZM41.0297 2.21833C39.6361 2.0585 39.6451 7.86389 39.8182 9.16611C40.5419 8.00823 41.7993 2.53009 41.0297 2.21833ZM51.1257 2.2991C49.732 2.13927 49.741 7.94469 49.9141 9.247C50.6378 8.08902 51.8952 2.61084 51.1257 2.2991ZM61.06 1.87849C58.8887 2.31451 59.3943 9.55399 59.7241 10.8237C62.2817 7.31085 62.3344 1.74654 61.06 1.87849ZM69.1975 10.9254C69.0871 10.4638 68.5351 10.2171 68.1541 10.2779C67.0639 10.4268 66.0065 11.7846 66.4158 13.8518C66.5069 14.3122 66.7349 14.736 66.7312 14.7219C69.1711 13.085 69.3785 11.7951 69.1975 10.9254ZM23.2205 7.46958C22.9089 7.46964 22.6043 7.37729 22.3452 7.20422C22.0861 7.03114 21.8841 6.78512 21.7648 6.49725C21.6455 6.20939 21.6143 5.89261 21.6751 5.587C21.7358 5.28138 21.8859 5.00065 22.1062 4.7803C22.3265 4.55995 22.6072 4.40989 22.9128 4.34909C23.2184 4.28829 23.5352 4.31948 23.8231 4.43873C24.111 4.55797 24.357 4.75991 24.5301 5.019C24.7032 5.27809 24.7956 5.5827 24.7956 5.89429C24.7956 6.10115 24.7549 6.30599 24.6757 6.4971C24.5966 6.68822 24.4806 6.86187 24.3343 7.00815C24.188 7.15443 24.0144 7.27047 23.8233 7.34964C23.6322 7.42882 23.4274 7.46957 23.2205 7.46958Z" fill="#0D0C22" />
                        </svg>
                        <span className="accessibility-text">Back to home page</span>
                    </a>
                </div>
                <ul className="site-nav-actions" data-site-nav-category="Top Nav">
                    <li className="js-site-nav-search site-nav-actions-item site-nav-desktop-only">
                        <a className data-site-nav-element="Search" href="/search">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" role="img" className="icon icon-18 fill-current">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" />
                            </svg>
                            <span className="accessibility-text">Search</span>
                        </a></li>
                    <li className="js-site-nav-sign-in site-nav-actions-item">
                        <a data-site-nav-element="Sign in" href="">Sign in</a>
                    </li>
                    <li className="js-site-nav-sign-up site-nav-actions-item site-nav-desktop-only">
                        <a className="form-sub" data-site-nav-element="Share my work" href="/signup/new">Share my work</a>
                    </li>
                </ul>
            </div>
            <div className="site-nav-mobile-menu js-site-nav-mobile-menu">
                <nav aria-label="primary">
                    <ul>
                        <li>
                            <form className="site-nav-mobile-menu-search" action="/search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none" role="img" className="icon site-nav-mobile-search-icon fill-current icon-16">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.6002 12.0498C9.49758 12.8568 8.13777 13.3333 6.66667 13.3333C2.98477 13.3333 0 10.3486 0 6.66667C0 2.98477 2.98477 0 6.66667 0C10.3486 0 13.3333 2.98477 13.3333 6.66667C13.3333 8.15637 12.8447 9.53194 12.019 10.6419C12.0265 10.6489 12.0338 10.656 12.0411 10.6633L15.2935 13.9157C15.6841 14.3063 15.6841 14.9394 15.2935 15.33C14.903 15.7205 14.2699 15.7205 13.8793 15.33L10.6269 12.0775C10.6178 12.0684 10.6089 12.0592 10.6002 12.0498ZM11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" />
                                </svg>
                                <input className="site-nav-mobile-search-input" type="search" name="q" placeholder="Search" autoComplete="off" defaultValue />
                            </form>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="inspiration" />
                            <label htmlFor="inspiration" className="site-nav-mobile-list-item">
                                Inspiration
                            </label>
                            <ul className="site-nav-mobile-dropdown-list">
                                <div className="site-nav-mobile-dropdown-list-container" data-site-nav-category="Inspiration">
                                    <li><a data-site-nav-element="Explore Design Work" href="/shots/popular">Explore Design Work</a></li>
                                    <li>
                                        <a className="flex align-center" data-site-nav-element="New & Noteworthy" href="/shots/recent">
                                            New &amp; Noteworthy
                                        </a>          </li>
                                    <li><a data-site-nav-element="Playoffs" href="/shots?list=playoffs">Playoffs</a></li>
                                    <li><a data-site-nav-element="Blog" href="/stories">Blog</a></li>
                                    <li><a data-site-nav-element="Weekly Warmup" href="/shots/19160667-Design-a-colorful-wine-label">Weekly Warmup</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="find-work" />
                            <label htmlFor="find-work" className="site-nav-mobile-list-item">
                                Find Work
                            </label>
                            <ul className="site-nav-mobile-dropdown-list">
                                <div className="site-nav-mobile-dropdown-list-container" data-site-nav-category="Find Work">
                                    <li><a data-site-nav-element="Job Board" href="/jobs">Job Board</a></li>
                                    <li>
                                        <a className="flex align-center" data-site-nav-element="Freelance Projects" href="/freelance-jobs">
                                            Freelance Projects
                                            <span className="pro-flag margin-l-8">Pro+</span>
                                        </a>          </li>
                                    <li>
                                        <a className="flex align-center" data-site-nav-element="Projects" href="/projects">
                                            Want freelance design projects?
                                        </a>          </li>
                                    <li>
                                        <a className="flex align-center" data-site-nav-element="Pitch" href="/pro/pitch">
                                            Personalize your profile with video
                                        </a>          </li>
                                </div>
                            </ul>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="learn-design" />
                            <label htmlFor="learn-design" className="site-nav-mobile-list-item">
                                Learn Design
                            </label>
                            <ul className="site-nav-mobile-dropdown-list" data-site-nav-category="Learn Design">
                                <div className="site-nav-mobile-dropdown-list-container">
                                    <li><a data-site-nav-element="Product Design Course" href="/courses/product-design?discount=design-course-25-off">Certified Product Design Course</a></li>
                                    <li><a data-site-nav-element="UI Design Course" href="/courses/ui-design">Introduction to UI Design</a></li>
                                    <li><a data-site-nav-element="Browse our courses & workshops" href="/learn">Browse our courses &amp; workshops</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="go-pro" />
                            <label htmlFor="go-pro" className="site-nav-mobile-list-item">
                                Go Pro
                            </label>
                            <ul className="site-nav-mobile-dropdown-list" data-site-nav-category="Learn Design">
                                <div className="site-nav-mobile-dropdown-list-container">
                                    <li><a data-site-nav-element="For Designers" href="/pro">For Designers</a></li>
                                    <li><a data-site-nav-element="For Freelancers" href="/projects">For Freelancers</a></li>
                                    <li><a data-site-nav-element="For Teams" href="/pro/teams">For Teams</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="design-files" />
                            <label htmlFor="design-files" className="site-nav-mobile-list-item">
                                Design Files
                            </label>
                            <ul className="site-nav-mobile-dropdown-list" data-site-nav-category="Design Files">
                                <div className="site-nav-mobile-dropdown-list-container">
                                    <li><a data-site-nav-element="Discover" href="/marketplace">Discover</a></li>
                                    <li><a data-site-nav-element="Graphics" href="/marketplace/graphics">Graphics</a></li>
                                    <li><a data-site-nav-element="Fonts" href="/marketplace/fonts">Fonts</a></li>
                                    <li><a data-site-nav-element="3D" href="/marketplace/3d">3D</a></li>
                                    <li><a data-site-nav-element="Templates" href="/marketplace/templates">Templates</a></li>
                                    <li><a data-site-nav-element="Add-Ons" href="/marketplace/add-ons">Add-Ons</a></li>
                                    <li><a data-site-nav-element="Web Themes" href="/marketplace/themes">Web Themes</a></li>
                                    <li><a data-site-nav-element="Open a Shop" target="_blank" href="https://creativemarket.com/sell?utm_source=dribbble&utm_medium=referral&utm_campaign=header">Open a Shop</a></li>
                                </div>
                            </ul>
                        </li>
                        <li className="site-nav-mobile-dropdown">
                            <input type="checkbox" name="dropdown" id="hire-designers" />
                            <label htmlFor="hire-designers" className="site-nav-mobile-list-item">
                                Hire Designers
                            </label>
                            <ul className="site-nav-mobile-dropdown-list">
                                <div className="site-nav-mobile-dropdown-list-container" data-site-nav-category="Hire Designers">
                                    <li><a data-site-nav-element="About Dribbble Hiring" href="/hiring">About Dribbble Hiring</a></li>
                                    <li>
                                        <a className="flex align-center" data-site-nav-element="Designer Search" href="/designers">
                                            Designer Search
                                        </a>          </li>
                                    <li><a data-billing-interval="quarterly" data-site-nav-element="List my job opening" href="/jobs/new">List my Job Opening</a></li>
                                    <li><a data-site-nav-element="Post a Freelance Project" href="/freelance-jobs">Post a Freelance Project</a></li>
                                </div>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
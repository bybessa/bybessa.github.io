/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {ReactComponent as Instagram} from '../../assets/icons/instagram-brands.svg';
import {ReactComponent as Whatsapp} from '../../assets/icons/whatsapp-brands.svg';
import Logo from '../../assets/logo.png';
import './styles.css';
import { useLocation, useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Catálogo', href: '/' },
  { name: 'Contato', href: '/contato' },
  { name: 'Sobre', href: '/sobre' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (route: string) => {
    navigate(route);
  }

  return (
    <Disclosure as="nav" className="bg-[url('./assets/wood.jpg')] bg-cover">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-[80px] w-auto"
                    src={Logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:flex sm:ml-6 items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick={() => goTo(item.href)}
                        className={classNames(
                          location.pathname === item.href ? 'bg-black text-white' : 'text-white hover:bg-gray-800',
                          'px-3 py-2 rounded-md text-sm font-medium cursor-pointer'
                        )}
                        aria-current={location.pathname === item.href ? 'page' : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href="https://www.instagram.com/bybessa.br/"
                  target="_blank" rel="noopener noreferrer"
                  className="h-10 w-10 p-2 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-black hover:bg-black parent transition ease-out duration-300"
                >
                  <Instagram className='parent-hover:fill-white'/>
                </a>
                <a
                  href='https://wa.me/message/P4KQJHUWDEW3F1'
                  target="_blank" rel="noopener noreferrer"
                  className="h-10 w-10 p-2 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-black hover:bg-black parent transition ease-out duration-300"
                >
                  <span className="sr-only">Whatsapp</span>
                    <Whatsapp className='parent-hover:fill-white'/>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'bg-black text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

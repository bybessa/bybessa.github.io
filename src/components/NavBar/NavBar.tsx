/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Instagram from '-!svg-react-loader!../../assets/icons/instagram-brands.svg';
import Whatsapp from '-!svg-react-loader!../../assets/icons/whatsapp-brands.svg';
import Logo from '../../assets/logo.png';

const navigation = [
  { name: 'Início', href: '#', current: true },
  { name: 'Catálogo', href: '#', current: false },
  { name: 'Contato', href: '#', current: false },
  { name: 'Sobre', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {
  return (
    <Disclosure as="nav" className="bg-[url('./assets/wood.jpg')] bg-cover">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-black text-white' : 'text-white hover:bg-gray-800',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex absolute inset-y-0 right-0 items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div
                  className="h-10 w-10 p-2 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-black"
                >
                  <Instagram />
                </div>
                <div
                  className="h-10 w-10 p-2 flex-shrink-0 flex items-center justify-center rounded-full border-2 border-black"
                >
                  <span className="sr-only">Whatsapp</span>
                  <Whatsapp />
                </div>
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
                    item.current ? 'bg-black text-white' : 'text-white hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
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

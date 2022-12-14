import React from 'react'
import { categories } from '../../../../data'

export const Catalogue = () => {
  return (
    <article id='catalogue'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>
          <div className="my-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {categories.map((categorie) => (
              <div key={categorie.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={categorie.imageSrc}
                    alt={categorie.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`#${categorie.href}`}>
                    <span className="absolute inset-0" />
                    {categorie.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{categorie.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {categories.map((categorie) => (
        <div className="bg-white">
          <div id={categorie.href} className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{categorie.name}</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div className="lg:col-span-2 lg:row-span-2 w-full h-full rounded-md overflow-hidden">
                <img
                  src={categorie.imageSrc}
                  alt={categorie.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              {categorie.products?.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}

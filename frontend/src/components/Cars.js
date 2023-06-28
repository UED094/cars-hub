

// const cars = [
//     {
//       id: 1,
//       make: 'Ferrari',
//       model: '458',
//       href: '#',
//       imageSrc: 'https://www.carscoops.com/wp-content/uploads/2022/02/Ferrari-458-3a-1024x555.jpg',
//       imageAlt: 'Yellow ferrari 458',
//     },
//     {
//         id: 2,
//         make: 'Toyota',
//         model: 'Supra',
//         href: '#',
//         imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydtN-I69jIu-mUeJwRa0vBK8SmZM51FrpkC227i0mNKxTQlnMFxpWNPRpYjAShsVny6k&usqp=CAU',
//         imageAlt: 'Legend Supra',
//     },
//     {
//         id: 3,
//         make: 'Tesla',
//         model: 'Model 3',
//         href: '#',
//         imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
//         imageAlt: 'Legend Supra',
//     },
//     {
//         id: 4,
//         make: 'Tesla',
//         model: 'Model 3',
//         href: '#',
//         imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
//         imageAlt: 'Legend Supra',
//     },
//     {
//         id: 5,
//         make: 'Tesla',
//         model: 'Model 3',
//         href: '#',
//         imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
//         imageAlt: 'Legend Supra',
//     },
//     {
//         id: 6,
//         make: 'Tesla',
//         model: 'Model 3',
//         href: '#',
//         imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
//         imageAlt: 'Legend Supra',
//     }
//   ]

  export function Cars({cars}) {

    return (
      <>
              {cars.map((car, index) => (
                <p>car.make </p>
      ))}
      </>
      // <div className="bg-white">
      //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      //     <h2 className="sr-only">Cars</h2>
  
      //     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      //       {cars.map((car) => (
      //         <a key={car.id} href={car.href} className="group">
      //           <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      //             <img
      //               src={car.imageSrc}
      //               alt={car.imageAlt}
      //               className="h-full w-full object-cover object-center group-hover:opacity-75"
      //             />
      //           </div>
      //           <h3 className="mt-4 text-sm text-gray-700">{car.make}</h3>
      //           <p className="mt-1 text-lg font-medium text-gray-900">{car.model}</p>
      //         </a>
      //       ))}
      //     </div>
      //   </div>
      // </div>
    )
  }

export default Cars
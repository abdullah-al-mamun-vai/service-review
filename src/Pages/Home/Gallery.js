import React from 'react';

const Gallery = () => {
    return (
        <div>
            {/* gallery sercion  */}
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/g7WDRzj/pexels-tara-winstead-8386437.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Wz60Gzg/pexels-it-services-eu-7639374.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Dbs0RnJ/pexels-j-shoots-4316.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/wMHjphb/pexels-pixabay-270572.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/W5xCNJk/pexels-pixabay-50711.jpg" />


                </div>
            </section>
        </div>
    );
};

export default Gallery;
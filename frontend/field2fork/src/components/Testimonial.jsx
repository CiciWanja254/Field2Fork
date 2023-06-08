import React from "react";

const posts = [
  {
    id: 1,
    description:
      "Field2Fork has revolutionized the way I connect with wholesalers and customers. It's a game-changer for my farm business, enabling me to reach a wider market and establish direct relationships. Highly recommended!",
    author: {
      name: "John Doe",
      role: "Farmer",
      imageUrl:
        "https://i.pinimg.com/564x/7e/5b/bc/7e5bbcd6495bb6beac328abfd0242602.jpg",
    },
  },
  {
    id: 1,
    description:
      "As a wholesaler, Field2Fork has streamlined my sourcing process, connecting me directly with reliable farmers. The platform's efficiency and transparency have transformed the way I do business. It's a must-have for anyone in the wholesale industry.",
    author: {
      name: "Jane Smith",
      role: "Wholesaler",
      imageUrl:
        "https://i.pinimg.com/564x/d4/15/1f/d4151f9385db87207ab017870983d8ef.jpg",
    },
  },
  {
    id: 1,
    description:
      "Field2Fork has made it incredibly convenient for me to access fresh, locally sourced produce. I love knowing exactly where my food comes from and supporting farmers in my community. The app is user-friendly, and the quality of the products is outstanding. I'm a loyal customer!",
    author: {
      name: "Mark Johnson",
      role: "Consumer",
      imageUrl:
        "https://i.pinimg.com/564x/fa/65/2c/fa652c503dbd7260f2b457f6f7e3da65.jpg",
    },
  },
  // More posts...
];

export default function Testimonial() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            User Testimonials
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hear from our satisfied users who have experienced the benefits of
            Field2Fork.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="relative mt-4 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>

              <div className="group relative">
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

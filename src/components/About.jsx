import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100  py-20">
      <div className=" container mx-auto">
        <div className="mb-12 text-center">
        <h2 className="text-6xl font-bold text-blue-700 mb-2 underline" >About Us</h2>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p className="text-gray-600 font-semibold">At OpenBooks, our mission is to foster a love for reading and provide a curated space for book enthusiasts to discover captivating literary works.
          We believe in the power of storytelling to inspire, educate, and connect people from all walks of life.</p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
        <p className="text-gray-600  font-semibold">We are a passionate team of bibliophiles and technology enthusiasts who came together with a shared vision — to create an immersive platform that celebrates the joy of reading.
          Our diverse backgrounds and love for literature drive us to continually enhance your experience on our OpenBooks App.</p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Sets Us Apart</h2>
        <p className="text-gray-600 font-semibold">
          Curated Selection: Our team meticulously selects books that span genres, cultures, and perspectives, ensuring a diverse and enriching reading experience for our users.

          User-Friendly Interface: We understand the importance of a seamless and enjoyable browsing experience. That's why we've designed our app with a modern and intuitive interface, making it easy for you to discover your next favorite book.

          Responsive Design: Whether you're on a laptop, tablet, or smartphone, our responsive design adapts to your device, providing a consistent and visually appealing experience.
        </p>
      </div>

      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-gray-600 font-semibold">We love hearing from our users! If you have suggestions, feedback, or just want to share your latest literary find,
          feel free to reach out to us. Your input helps us grow and improve.</p>
      </div>

      <div className="mb-32 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet the Team</h2>
        <p className="text-gray-600 font-semibold">Passionate individuals dedicated to creating an exceptional reading experience.</p>
        <p className="text-gray-600 font-semibold">Thank you for being a part of the OpenBooks community. Happy reading!</p>
      </div>

      {/* Include team member cards or details here */}
    </div>
  </section>
  )
}

export default About
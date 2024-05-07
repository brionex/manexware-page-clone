import { useState } from 'react'

export function HeaderSlider() {
  const images = [
    'https://cdn.manexware.com/web/image/7348-741a7094/ERP1.png',
    'https://cdn.manexware.com/web/image/4399-7d5c554a/Eq-8TsPXUAAE9lm.jpg',
    'https://imageio.forbes.com/specials-images/imageserve/651123d5c34b3f195bcb85e4/0x0.jpg?format=jpg&height=900&width=1600&fit=boundsm',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const changeImage = function () {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="flex-grow min-h-dvh w-full">
      <img
        className="absolute h-full w-full object-cover"
        src={images[currentIndex]}
        alt="Image illustration "
      />
      <button className='absolute' onClick={changeImage}>Cambiar</button>
    </section>
  )
}

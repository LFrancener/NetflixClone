import { useEffect, useState } from 'react'
import { Movie } from '../typings'
import Image from 'next/image'
import { baseUrl } from '../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])

    return (
        <div className='flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute top-0 left-0 -z-10 h-[95vh] w-screen'>
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    layout="fill"
                    objectFit='cover'
                />
            </div>
            <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
                {movie?.title || movie?.original_title}
            </h1>
            <p className='max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
                {movie?.overview}
            </p>
            <div className='flex space-x-3'>
                <button className='text-black bg-white bannerButton'>
                    <FaPlay className='w-4 h-4 text-black md:w-7 md:h-7' /> Play
                </button>
                <button className='bannerButton bg-[gray]/70'>
                    More info <InformationCircleIcon className='w-5 h-5 md:w-5 md:h-5' />
                </button>
            </div>
        </div>
    )
}

export default Banner
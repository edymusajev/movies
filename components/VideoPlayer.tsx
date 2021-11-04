import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { HiPlay } from 'react-icons/hi';
import useSWR from 'swr';
import { fetcher } from '../services/SWRFetcher';

interface VideoPlayerProps {
  id: number;
  type: string;
}

export const VideoPlayer = ({ id, type }: VideoPlayerProps) => {
  const { data, error } = useSWR(`/api/trailer?type=${type}&id=${id}`, fetcher);
  console.log(id);
  if (data) {
    console.log(data);
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${data ? 'flex-1 flex items-center justify-center w-full' : 'hidden'}`}>
      <span onClick={() => setIsOpen(true)} className="flex items-center hover:cursor-pointer">
        <HiPlay size="1.5rem" className="mr-1" />
        Play Trailer
      </span>
      <Dialog className="fixed inset-0 z-10" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="min-h-screen flex justify-center items-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          <div className=" m-4 w-full h-full z-20">
            <div className="trailer-container">
              {data && (
                <iframe
                  className="trailer-iframe"
                  src={`https://www.youtube.com/embed/${data.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

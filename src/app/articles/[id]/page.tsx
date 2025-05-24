import DeleteButton from '@/app/components/DeleteButton';
import { getDetailArticles } from '@/blogAPI';
import Image from 'next/image';
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  const detailArticles = await getDetailArticles(id);

  const handleDelete = async () => {};

  return (
    <div className='max-w-3xl mx-auto p-5'>
        <Image
            src={`https://picsum.photos/1000/500?sig=${detailArticles.id}`}
            alt=""
            width={1280}
            height={300}
        />
        <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticles.title}</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>{detailArticles.content}</p>
        </div>
        <div className='text-right mt-3'>
          <DeleteButton id={id} />
        </div>
    </div>
  )
};

export default Article
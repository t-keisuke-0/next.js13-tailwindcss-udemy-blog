import DeleteButton from '@/app/components/DeleteButton';
import Image from 'next/image';
import React from 'react'

const Article = async ({ params }: { params: { id: string } }) => {
  const { id } = await params

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${API_URL}/api/blog/${id}`, {
    next: { 
      revalidate: 10
    } 
  });
  const detailArticle = await res.json();

  return (
    <div className='max-w-3xl mx-auto p-5'>
        <Image
            src={`https://picsum.photos/1000/500?sig=${detailArticle.id}`}
            alt=""
            width={1280}
            height={300}
        />
        <h1 className='text-4xl text-center mb-10 mt-10'>{detailArticle.title}</h1>
        <div className='text-lg leading-relaxed text-justify'>
            <p>{detailArticle.content}</p>
        </div>
        <div className='text-right mt-3'>
          <DeleteButton id={id} />
        </div>
    </div>
  )
};

export default Article
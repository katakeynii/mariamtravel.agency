"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.jpeg';
import mixpanel from '@/utils/mixpanel';

const Page = () => {
    useEffect(() => {
        mixpanel.track('Page Viewed', { page: 'Vos Dua à la Kaaba' });
    }, []);
    return (
        <div className="mx-auto  py-8">
            <header className="flex items-center justify-center mb-8 gap-8 flex-col">
                <Image
                    src={logo}
                    alt="Travel Logo"
                    width={100}
                    height={50}
                    className="object-contain"
                />
                <h1 className="text-3xl font-bold">Oumra Ramadan du 15 au 30 Mars 2025</h1>
            </header>
            <div className="flex justify-center items-center">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfS-GWlIZkUXpsJkQ_Ws3StqFMUpFFbB7h9pFsx1Unzq8NmHw/viewform?embedded=true" width="640" height="914" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
            </div>
        </div>
    );
}

export default Page;

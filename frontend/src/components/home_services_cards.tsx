
import Card from '../components/Services';

import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

import { BookmarkIcon, BookOpenIcon, DocumentIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

function Services(){
    return(
        
<section id="services" className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
    <Card
        body="Do laborum sunt ut ex cupidatat exercitation."
        title="Class 8-9"
        image={image1}
        badge={{
            text: "New Post",
            filled: false,
        }}
        indicator="Sold"
        btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon className="w-5 h-5" />,
        }}
    />
    <Card
        body="Do laborum sunt ut ex cupidatat exercitation."
        title="Class 10"
        image={image2}
        badge={{
            text: "New Post",
            filled: true,
        }}
        indicator="New"
        btn={{
            text: "Apply",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <PencilSquareIcon className="w-5 h-5" />,
        }}
    />
    <Card
        body="Do laborum sunt ut ex cupidatat exercitation."
        title="Class 11-12"
        image={image3}
        badge={{
            text: "New Post",
            filled: true,
        }}
        indicator="Upcoming"
        btn={{
            text: "Book",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <BookmarkIcon className="w-5 h-5" />,
        }}
    />
</section>
    )
}

export default Services;

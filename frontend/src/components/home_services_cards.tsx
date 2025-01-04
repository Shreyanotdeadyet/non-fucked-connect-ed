import Card from '../components/Services';
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import { BookmarkIcon, BookOpenIcon, DocumentIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

function Services(){
    return(
<section id="services" className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 p-8 flex flex-wrap justify-center overflow-x-auto ">
    <Card
        body={
            <ul>
                <li>• Understand career paths that revolve around your unique identity, personality, and interests.</li>
                <li>• Read, watch, write, learn, and grow.</li>
                <li>• Learning with purpose and direction makes a significant difference.</li>
                <li>• Strengthen thinking skills to succeed at school, college, and beyond.</li>
                <li>• Learn how to beat procrastination to excel inside and outside the class.</li>
                <li>• Apply to competitive summer programs to gain hands-on experience.</li>
                <li>• Develop communication skills to craft and deliver an elevator pitch.</li>
            </ul>
        }
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
        body={
            <ul>
                <li>• Understand the synergy between career choices and the future job market.</li>
                <li>• Decide where to study and understand educational systems.</li>
                <li>• Get into top summer programs and internships to confirm your interests.</li>
                <li>• Know industry trends in fields that align with your evolving career interests.</li>
                <li>• Select the right curriculum and subjects in accordance with college & career goals.</li>
            </ul>
        }
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
        body={
            <ul>
                <li>• Decide on the right curriculum, subjects, APs, SAT or ACT, and English Language Test.</li>
                <li>• Let your extracurricular activities set you apart from the competition.</li>
                <li>• Strategize your best chance with the best fit schools – UK, USA, Canada, or Europe.</li>
                <li>• Craft brag sheets to help your recommender stand out.</li>
                <li>• Get into top summer programs to boost your profile and learn more about your intended career.</li>
                <li>• Learn how admissions officers mark essays and how to make yours unique.</li>
            </ul>
        }
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

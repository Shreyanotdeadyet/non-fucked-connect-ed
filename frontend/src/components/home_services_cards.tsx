
import Card from '../components/Services';

import { BookmarkIcon, BookOpenIcon, DocumentIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

function Services(){
    return(
        
<section id="services" className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 p-8">
    <Card
        body="1. Understand career paths that revolve around your unique identity, personality, and interests so that you're applying to college knowing your options.
2. Read, watch, write, learn, grow.
3. Learning as a high schooler never stops; but, learning meaningfully with purpose and direction makes all the difference. 
4. Our activities are built to strengthen thinking skills that work as a recipe for success at school, college, and beyond.
5 .Learn how to beat procrastination to excel inside and outside the class.
6. Apply to competitive summer programs to take a closer look at your interests through hands-on experiences.
7.Develop communication skills to craft and deliver an elevator pitch and develop interpersonal skills vital for college."
  
        title="Class 8-9"
       // image={image1}
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
        body="1. After career exploration in previous grades, understand the synergy between your current career choices and the future job market.
2. Deciding where to study is as important as deciding what to study. Understand educational systems and pick the right one for you.
3. Get into top summer programs and internships to confirm your short-term and long-term interests and to start building your extracurricular profile for college.
4. Know industry trends in fields that align with your evolving career interests.
5. Select the right curriculum and subjects in accordance with your college & career goals and those that are required by top universities."
        title="Class 10"
        //image={image2}
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
        body=" Which curriculum? Subjects? APs? SAT or ACT? Which English Language Test? The questions related to building a strong academic profile are many – we have answers to them all!
Let your extracurricular activities set you apart from your competition – our recommendations are one-of-a-kind, and the best part? They revolve around your strengths.
We navigate through long lists of options for you – strategizing your best chance with the best fit schools! Deciding where to study is as important as deciding what to study. UK? USA? Canada? Europe? We're here to help.
Craft brag sheets in a way that helps your recommender help you stand out.
Get into top summer programs and challenging learning opportunities to learn more about your intended career choice and to boost your profile.
Find out how admissions officers view and mark essays, and learn how to make yours unique and memorable.
"
        title="Class 11-12"
        //image={image3}
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

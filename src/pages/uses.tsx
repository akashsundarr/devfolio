import Navigation from '@/components/Navigation';
import React from 'react';

const Uses = () => {
  return (
     <div className="min-h-screen bg-background text-foreground">
      <Navigation />
       <div className="flex items-center justify-center min-h-screen px-6 md:px-12 py-12">
      
      <main className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6">Uses</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Hardware</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>ASUS Vivobook 16X (Ryzen 5 5600H)</li>
            <li>iPhone 12</li>
            <li>Redragon Fizz Mechanical Keyboard</li>
            <li>Razer DeathAdder Essential Mouse</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Software</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Editor: VS Code</li>
            <li>Browsers: Brave, Chrome</li>
          </ul>
        </section>
      </main>
    </div>
     </div>
   
  );
};

export default Uses;

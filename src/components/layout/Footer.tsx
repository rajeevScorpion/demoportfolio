import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-text-primary/10 py-12 mt-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-heading font-bold tracking-tight text-text-primary">
              Rajeev Kumar<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-text-secondary max-w-sm">
              Designing systems, stories, and learning experiences for emerging futures.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-text-secondary hover:text-accent transition-colors">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-semibold text-text-primary mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors">Dribbble</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-text-primary/10 flex flex-col md:flex-row items-center justify-between text-sm text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Rajeev Kumar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with intention.</p>
        </div>
      </div>
    </footer>
  );
}

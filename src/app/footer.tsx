import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] border-t border-[#2e31385d] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-hollow-white">
                Hollow Knight Wiki
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-[#54A6DB] font-medium mb-3">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/knight"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    The Knight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/achievements"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link
                    href="/charms"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Charms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/enemies"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Enemies
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#54A6DB] font-medium mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/map"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Interactive Map
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/lore"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Lore
                  </Link>
                </li>
                <li>
                  <Link
                    href="/updates"
                    className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
                  >
                    Updates
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-hollow-gray/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#E1DFEA] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hollow Knight Wiki. Fan-made content,
            not affiliated with Team Cherry - Developer: Batsy13.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.github.com/Batsy13"
              className="text-[#E1DFEA] hover:text-[#54A6DB] transition-colors"
              target="_blank"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

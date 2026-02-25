import React from "react";

const bustaniScreenshot = "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg";

const projects = [
  {
    title: "Bustani ya Hadith",
    description: "An app providing authentic Hadith collections with audio support in Arabic language.",
    link: "https://bustani.gohimma.xyz/",
    image: "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024785/Screenshot_20260203_193642_qqvne0.jpg",
  },
  {
    title: "Darsa Audio App (Upcoming)",
    description: "An Islamic learning platform with audio lessons on various topics.",
    link: "#",
    image: "/assets/images/coming-soon.png",
  },
  {
    title: "Ahkaam Al Janazah (Upcoming)",
    description: "A guide on Islamic funeral rites, including teachings and best practices.",
    link: "#",
    image: "/assets/images/coming-soon.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-blue-600">Introducing</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Bustani Ya Hadith
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  {projects[0].title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  {projects[0].description}
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src={projects[0].image}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1 lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We are committed to delivering high-quality products and services that meet the needs of our customers.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <img
                  className="w-full max-lg:max-w-xs"
                  src={bustaniScreenshot}
                  alt="Bustani ya Hadith App"
                  style={{
                    scale: "1.4",
                    transformOrigin: "center center",
                    transform: "translate(0, 50px) scale(1.25)",
                  }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          {/* <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div> */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powered by Flutter & Dart
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">

                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        theme_provider.dart
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">main.dart</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    {/* Your code example */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
                      <pre className="relative text-sm text-gray-400">
                        <code 
                          className="language-dart"
                          data-prismjs-copy="Copy"
                          data-prismjs-copy-success="Copied!"
                          data-prismjs-copy-error="Can't copy"
                          data-prismjs-copy-title="Copy to clipboard"
                          data-prismjs-copy-aria-label="Copy to clipboard"
                          data-prismjs-copy-title-placement="top"
                        >
                          {`class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    initialization();

    ...
  }

  void initialization() async {
    await Future.delayed(const Duration(seconds: 1));
    FlutterNativeSplash.remove();
  }

  @override
  Widget build(BuildContext context) {

  return MediaQuery(
      data: MediaQuery.of(context)...
    );
  }
                          `}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

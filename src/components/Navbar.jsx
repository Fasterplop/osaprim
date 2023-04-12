import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleFunction = () => {
    setIsToggled(!isToggled);
  };

  return (
    // z-auto to work on mobile
    <nav className=" uppercase sticky top-0 z-auto sm:z-50  bg-[#012060] overflow-hidden">
      <div className=" max-w-6xl mx-auto ">
        <div className="flex sm:justify-center justify-end">
          <div className="flex">
            {/* primary menu */}

            <ul className="hidden sm:flex items-center space-x-3 sm:py-2">
              <li className="menu_list">
                <Link href="/">
                  <AiOutlineHome className="text-[26px] text-[#01AAE5]" />
                </Link>
              </li>
              <li className="menu_list">
                <Link href="/becoming_a_monk">Vocation</Link>
              </li>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <li className="menu_list flex flex-row">
                    History
                    <HiOutlineChevronDown className="text-center ml-1 my-auto text-xl" />
                    {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
                  </li>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="DropdownMenuContent "
                    align="start"
                    alignOffset={-5}
                    sideOffset={10}
                  >
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/history/holy_father_st_augustin">
                            Holy Father St. Augustin
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/history/founder">Founder</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/history/augustinian_monks_osa">
                            Augustinian Monks - OSA
                          </Link>
                        </li>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <li className="menu_list flex flex-row">
                    News
                    <HiOutlineChevronDown className="text-center ml-1 my-auto text-xl" />
                    {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
                  </li>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="DropdownMenuContent "
                    align="start"
                    alignOffset={-5}
                    sideOffset={10}
                  >
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/news/vatican_news">Vatican News</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/news/american_roman_catholic">
                            American Roman Catholic
                          </Link>
                        </li>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <li className="menu_list flex flex-row">
                    Spirituality
                    <HiOutlineChevronDown className="text-center ml-1 my-auto text-xl" />
                    {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
                  </li>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="DropdownMenuContent "
                    align="start"
                    alignOffset={-5}
                    sideOffset={10}
                  >
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/spirituality/our_charism">
                            Our Charism
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/spirituality/our_values">
                            Our Values
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/spirituality/our_saints">
                            Our Saints
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/spirituality/resources">Resources</Link>
                        </li>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <li className="menu_list flex flex-row">
                    Support
                    <HiOutlineChevronDown className="text-center ml-1 my-auto text-xl" />
                    {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
                  </li>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="DropdownMenuContent"
                    align="start"
                    alignOffset={-5}
                    sideOffset={10}
                  >
                    <DropdownMenu.Group>
                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/welcome">Welcome</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/the_augustinian_fund">
                            The Augustinian Fund
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/media">Media</Link>
                        </li>
                      </DropdownMenu.Item>
                    </DropdownMenu.Group>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              <Link href="/donate">
                <div className="hover:bg-[#01AAE5] bg-white hover:text-white  hover:scale-105 text-[16px] font-OpenSans text-[#012060] p-3 text-center  rounded-full">
                  Donate
                </div>
              </Link>
            </ul>

            {/* mobile button */}
            <div className="sm:hidden flex items-center px-8">
              <button
                onClick={toggleFunction}
                className="my-2 text-4xl text-white"
              >
                {!isToggled ? <AiOutlineMenu /> : <AiOutlineClose />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR */}
      <div className={`${isToggled ? "flex" : "hidden"} `}>
        <ul className="sm:hidden w-full">
          <li className="menu_list_phone">
            <Link href="/">Home</Link>
          </li>

          <li className="menu_list_phone">
            <Link href="/becoming_a_monk">Vocation</Link>
          </li>

          <DropdownMenu.Root dir="ltr">
            <DropdownMenu.Trigger asChild>
              <li className="menu_list_phone flex flex-row">
                History
                <HiOutlineChevronRight className="text-2xl pl-2" />
                {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
              </li>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent "
                align="end"
                side="bottom"
              >
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/history/holy_father_st_augustin">
                        Holy Father St. Augustin
                      </Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/history/founder">Founder</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/history/augustinian_monks_osa">
                        Augustinian Monks - OSA
                      </Link>
                    </li>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <DropdownMenu.Root dir="ltr">
            <DropdownMenu.Trigger asChild>
              <li className="menu_list_phone flex flex-row">
                News
                <HiOutlineChevronRight className="text-2xl pl-2" />
                {/* <HiOutlineChevronDown className="bottom-[-10px] left-[50%] translate-x-[-50%] absolute text-xl" /> */}
              </li>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent "
                align="end"
                side="bottom"
              >
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/news/vatican_news">Vatican News</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/news/american_roman_catholic">
                        American Roman Catholic
                      </Link>
                    </li>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <DropdownMenu.Root dir="ltr">
            <DropdownMenu.Trigger asChild>
              <li className=" menu_list_phone flex flex-row">
                Spirituality <HiOutlineChevronRight className="text-2xl pl-2" />
              </li>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent"
                align="end"
                side="bottom"
              >
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/spirituality/our_charism">Our Charism</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/spirituality/our_values">Our Values</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/spirituality/our_saints">Our Saints</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/spirituality/resources">Resources</Link>
                    </li>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <li className="menu_list_phone  flex flex-row">
                Support <HiOutlineChevronRight className="text-2xl pl-2" />
              </li>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="DropdownMenuContent"
                align="end"
                side="bottom"
              >
                <DropdownMenu.Group>
                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/welcome">Welcome</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/the_augustinian_fund">
                        The Augustinian Fund
                      </Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/media">Media</Link>
                    </li>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <Link href="/donate">
            <button className="hover:bg-[#012060] my-2 mx-2 mb-3 p-2 hover:text-white  bg-white hover:scale-105 text-[14px] font-OpenSans text-[#012060] text-center  rounded-full w-fit">
              Donate
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleFunction = () => {
    setIsToggled(!isToggled);
  };

  return (
    // z-auto
    <nav className=" sticky top-0 z-auto  bg-[#A020F0] overflow-hidden">
      <div className=" max-w-6xl mx-auto ">
        <div className="flex sm:justify-center justify-end">
          <div className="flex">
            {/* primary menu */}

            <ul className="hidden sm:flex items-center space-x-6 sm:py-2">
              <li className="menu_list">
                <Link href="/">Home</Link>
              </li>
              <li className="menu_list">
                <Link href="/becoming_a_monk">Becoming a Monk</Link>
              </li>
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

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/spirituality/secular_fraternities">
                            Secular Fraternities
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
                    Ministries
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
                          <Link href="/ministries/augustinian_volunteers">
                            Augustinian Volunteers
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/ministries/augustinian_foreign_missions">
                            Augustinian Foreign Missions
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
                          <Link href="/support/legacy_gifts">Legacy Gifts</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/gift_shop">Gift Shop</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/events">Events</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/mass_cards">Mass Cards</Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/memorial_bricks">
                            Memorial Bricks
                          </Link>
                        </li>
                      </DropdownMenu.Item>

                      <DropdownMenu.Item>
                        <li className="sub_menu_list">
                          <Link href="/support/meet_the_team">
                            Meet the Team
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
                <div className="hover:bg-[#bc8dfc] bg-white hover:text-white  hover:scale-105 text-[16px] font-OpenSans text-[#8D39FA] p-3 text-center  rounded-full">
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

      {/* mobile navbar */}
      <div className={`${isToggled ? "flex" : "hidden"} `}>
        <ul className="sm:hidden w-full">
          <li className="menu_list_phone">
            <Link href="/">Home</Link>
          </li>

          <li className="menu_list_phone">
            <Link href="/becoming_a_monk">Becoming a Monk</Link>
          </li>

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

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/spirituality/secular_fraternities">
                        Secular Fraternities
                      </Link>
                    </li>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <li className="menu_list_phone  flex flex-row ">
                Ministries <HiOutlineChevronRight className="text-2xl pl-2" />
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
                    <li className="sub_menu_list z-50">
                      <Link href="/ministries/augustinian_volunteers">
                        Augustinian Volunteers
                      </Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/ministries/augustinian_foreign_missions">
                        Augustinian Foreign Missions
                      </Link>
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
                      <Link href="/support/legacy_gifts">Legacy Gifts</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/gift_shop">Gift Shop</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/events">Events</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/mass_cards">Mass Cards</Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/memorial_bricks">
                        Memorial Bricks
                      </Link>
                    </li>
                  </DropdownMenu.Item>

                  <DropdownMenu.Item>
                    <li className="sub_menu_list">
                      <Link href="/support/meet_the_team">Meet the Team</Link>
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
            <button className="hover:bg-[#bc8dfc] my-2 mx-2 mb-3 p-2 hover:text-white  bg-white hover:scale-105 text-[14px] font-OpenSans text-[#8D39FA] text-center  rounded-full w-fit">
              Donate
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

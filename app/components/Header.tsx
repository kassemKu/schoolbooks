import { Link } from "@remix-run/react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

export const Header = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content font-arabic">
      <div className="flex-1">
        <Link
          dir="rtl"
          to={"/"}
          className="btn btn-ghost text-sm md:text-xl uppercase font-arabic"
        >
          الى غزة
        </Link>
      </div>
      <div className="flex-none flex items-center space-x-2 md:space-x-8">
        <NavigationMenu>
          <NavigationMenuList className="space-x-2 md:space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>باشراف</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul dir="rtl" className="menu w-48 items-center">
                  <li>
                    <a>الاستاذ تامر شتو</a>
                  </li>
                  <li>
                    <a>الاستاذ تامر شتو</a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>فريق العمل</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul dir="rtl" className="menu w-56 items-center">
                  <li>
                    <a>قاسم كليب</a>
                  </li>
                  <li>
                    <a>معتز الدروبي</a>
                  </li>
                  <li>
                    <a>اسامة رحمون</a>
                  </li>
                  <li>
                    <a>عبيدة عمار</a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Drawer>
          <DrawerTrigger asChild>
            <button className="btn font-arabic btn-sm md:btn-md">
              اهداف المشروع
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <div
                className="p-4 font-arabic prose prose-sm md:prose-base"
                dir="rtl"
              >
                <ul>
                  <h4>بالنسبة لفلسطين</h4>
                  <li>
                    محاولة ارسال العلم الي اخواننا المستضعفين و لاسيما مادة
                    الرياضيات التي تفيدهم في الهندسة ليعمرو مبانيهم المحطمة
                    ويبنوا مستقبلهم الذي هو حق لكل طفل ! بالاضافه الى اننا
                    سنعلمهم اياها باللغة الانجليزية لتقوية لغتهم للتعامل مع
                    الاحتلال في حال الهدنة و ماشابه
                  </li>
                  <h4>بالنسبة للبنان</h4>
                  <li>
                    محاولة ارسال العلم الي اخواننا المستضعفين و لاسيما مادة
                    الرياضيات التي تفيدهم في الهندسة ليعمرو مبانيهم المحطمة
                    ويبنوا مستقبلهم الذي هو حق لكل طفل ! بالاضافه الى اننا
                    سنعلمهم اياها باللغة الانجليزية لتقوية لغتهم للتعامل مع
                    الاحتلال في حال الهدنة و ماشابه
                  </li>
                </ul>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

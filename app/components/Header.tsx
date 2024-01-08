import { Link } from "@remix-run/react";
import React from "react";

export const Header = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content font-arabic">
      <div className="flex-1">
        <Link
          to={"/"}
          className="btn btn-ghost text-base md:text-xl uppercase font-arabic"
        >
          ارسال العلم لاخواننا في غزة
        </Link>
      </div>
      <div className="flex-none">
        <ul dir="rtl" className="menu menu-horizontal px-1">
          <li className="flex-row-reverse space-x-2 md:space-x-14">
            <details>
              <summary className="px-2 md:px-3 text-xs md:text-sm">
                المشرفين
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-slate-600">
                <li>
                  <a>الاستاذ تامر شتو</a>
                </li>
                <li>
                  <a>الاستاذ بلابلا</a>
                </li>
              </ul>
            </details>
            <details>
              <summary className="px-2 md:px-3 text-xs md:text-sm">
                المشاركين
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-slate-600">
                <li>
                  <a>قاسم كليب</a>
                </li>
                <li>
                  <a>معتز الدروبي الورع</a>
                </li>
                <li>
                  <a>اسامة رحمون</a>
                </li>
                <li>
                  <a>عبيدة عمار</a>
                </li>
                <li>
                  <a>محمد شمس الدين</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
        <label
          htmlFor="my_modal_6"
          className="btn font-arabic btn-sm md:btn-md"
        >
          اهداف المشروع
        </label>

        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div
          className="modal text-slate-700 font-arabic"
          role="dialog"
          dir="rtl"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">من اهم اهداف هذا المشروع هي</h3>
            <p className="py-4">
              محاولة ارسال العلم الي اخواننا المستضعفين و لاسيما مادة الرياضيات
              التي تفيدهم في الهندسة ليعمرو مبانيهم المحطمة ويبنوا مستقبلهم الذي
              هو حق لكل طفل ! بالاضافه الى اننا سنعلمهم اياها باللغة الانجليزية
              لتقوية لغتهم للتعامل مع الاحتلال في حال الهدنة و ماشابه
            </p>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn text-slate-600">
                اغلاق
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

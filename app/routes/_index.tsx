import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "School Project" }, { name: "description", content: "" }];
};

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-8 md:px-0">
      <header className="flex items-center justify-center flex-col mt-12">
        <h1 className="text-3xl lg:text-5xl uppercase font-semibold">
          fractions
        </h1>
        <span className="text-neutral/50 text-sm font-medium">
          gr seven, alaiman-school, 2024
        </span>
      </header>
      <div className="mt-8 prose prose-slate mx-auto lg:prose-lg xl:prose-2xl">
        <blockquote className="max-w-screen-sm md:max-h-full">
          <p>
            A fraction is a representation of a part of a whole. It's written as
            a/b, where a is the numerator and b is the denominator (b cannot be
            zero).
          </p>
        </blockquote>
        <h4>Example:</h4>
        <div className="mockup-code max-w-[80vw] md:max-w-full">
          <pre className="xl:mt-0 xl:mb-0">
            <code>
              3 &#8213; 7, 5/8, 15/17, 14/21, and 121/360 are all fractions.
            </code>
          </pre>
          <pre className="xl:mt-0 xl:mb-0">
            <code>3.5/4 8/1.2 0.9/4.5 are not fractions.</code>
          </pre>
        </div>
        <div className="divider divider-end"></div>
        {/* end definition */}
        <h3> Simplifying Fractions:</h3>
        <h4>Rule</h4>
        <blockquote className="max-w-screen-sm md:max-h-full">
          <p>
            To simplify a fraction a/b is to replace it by an equal fraction,
            upon dividing its two terms by the common divisor.
          </p>
        </blockquote>
        <div>
          <h4 className="text-info capitalize">note: </h4>
          <p className="font-medium max-w-screen-sm md:max-h-full">
            to simplify a fraction a/b it is necessary to find the common
            divisors of the numerator and the denominator.
          </p>
          <p>An integer is divisible by:</p>
          <ul>
            <li>2 if it ends in 0, 2, 4, 6, or 8</li>
            <li>5 if it ends in 0 or 5</li>
            <li>3 if the sum of its digits is divisible by 3</li>
            <li>9 if the sum of its digits is divisible by 9</li>
            <li>10 if it ends in 0</li>
          </ul>
          <h4>Examples:</h4>
          <div className="mockup-code max-w-[80vw] md:max-w-full">
            <pre className="xl:mt-0 xl:mb-0">
              <code>64÷2/20÷2 = 32/10</code>
            </pre>
            <pre className="xl:mt-0 xl:mb-0">
              <code>54÷9/63÷9 = 6/7</code>
            </pre>
          </div>
        </div>
        {/* end Simplifying Fractions */}
        <div>
          <h3>REDUCIBLE FRACTION-IRREDUCIBLE FRACTION:</h3>
          <h4>Rule</h4>
          <blockquote className="max-w-screen-sm md:max-w-full">
            <p>
              A common fraction whose numerator and denominator have a common
              factor is called a reducible fraction. A common fraction whose
              numerator and denominator are prime is called an irreducible
              fraction.
            </p>
          </blockquote>
          <div>
            <h4>Examples:</h4>
            <div className="mockup-code mb-6 max-w-[80vw] md:max-w-full">
              <pre className="xl:mt-0 xl:mb-0 mr-32">
                <code>
                  32/40 is reducible fraction. 32÷4/40÷4 = 8÷2/10÷2 = 4/5 last
                  form
                </code>
              </pre>
              <pre className="xl:mt-0 xl:mb-0">
                <code>14/33 is irreducible fraction (since it's prime)</code>
              </pre>
            </div>
          </div>
        </div>
        {/* End  REDUCIBLE FRACTION-IRREDUCIBLE FRACTION */}
        <div>
          <h3>Practical Methods For Reducing Fraction:</h3>
          <h4>1.Successive divisions</h4>
          <img
            className="max-w-[80vw] md:max-w-full"
            src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/reducing-fractions-02-1628230454.png"
            alt=""
          />
          <h4>2.G.C.F Method</h4>
          <p>
            The GCF (Greatest Common Factor) of two or more numbers is the
            greatest number among all the common factors of the given numbers.
          </p>
          <img
            className="max-w-[80vw] md:max-w-full"
            src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/reducing-fractions-03-1628230565.png"
            alt=""
          />
          <h4>3.Prime factorization</h4>
          <p>
            Prime factorization is a way of expressing a number as a product of
            its prime factors.
          </p>
          <img
            className="max-w-[80vw] md:max-w-full"
            src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/reducing-fractions-04-1628230637.png"
            alt=""
          />
        </div>
        {/* End Practical Methods For Reducing Fraction */}
        <div className="max-w-[80vw] md:max-w-full">
          <h3>operation On Fractions:</h3>
          <h4>1.Addition And Subtraction:</h4>
          <p>to add or subtract fraction you Should:</p>
          <ul>
            <li>
              1) Find the least common denominator(if doesn't have common
              denominator)
            </li>
            <li>2) Add or subtract the numerators.</li>
            <li>3) the denominator stay the same</li>
          </ul>
          <div>
            <h4>Examples:</h4>
            <div className="mockup-code max-w-[80vw] md:max-w-full">
              <pre className="xl:mt-0 xl:mb-0 mr-32">
                <code>1/2 * 7 + 3/7 * 2 = 7/14 + 6/14 = 4/14</code>
              </pre>
              <pre>
                <code>5 - 2/3 = 15/3 - 2/3 = 13/3</code>
              </pre>
            </div>
          </div>
          <h4>2.Multiplication</h4>
          <p>
            To multiply two fractions we multiply numerator with numerator and
            denominator with denominator
          </p>
          <div>
            <h4>Examples:</h4>
            <div className="mockup-code mb-6">
              <pre className="xl:mt-0 xl:mb-0 mr-32">
                <code>3/4 * 5/7 = 15/28</code>
              </pre>
              <pre>
                <code>9 * 3/4 = 27/4</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="text-info capitalize">note: </h4>
            <p>
              the fraction that is without denominator then the denominator is 1
            </p>
          </div>
          <h4>3.Division</h4>
          <p>
            To Divide two fraction, we Multiply the first with the
            reciprocal(inverse) of the second
          </p>
          <div>
            <h4>Examples:</h4>
            <div className="mockup-code mb-6">
              <pre className="xl:mt-0 xl:mb-0 mr-32">
                <code>7/11 ÷ 3/5 = 7/11 * 5/3 = 35/33</code>
              </pre>
              <pre>
                <code>3/4 ÷ 5 = 3/4 * 1/5 = 3/20</code>
              </pre>
            </div>
          </div>
          <h4>4.Power</h4>
          <p className="ordinal">1st</p>
        </div>

        <div className="max-w-full">
          <div className="join">
            <button className="join-item btn btn-outline">Previous</button>
            <button className="join-item btn btn-outline">2</button>
            <button className="join-item btn btn-outline">3</button>
            <button className="join-item btn btn-outline">4</button>
            <button className="join-item btn btn-outline">...</button>
            <button className="join-item btn btn-outline">25</button>

            <button className="join-item btn btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

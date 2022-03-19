import React from "react"
import ReactMarkdow from "react-markdown"

const FeaturesSection = ({ focusMessage, blurbs }) => (
  <>
    <div className="py-4 bg-white md:py-12" id="blurbs">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {focusMessage && (
          <div className="sm:text-center">
            <p className="text-base leading-6 text-teal-600 font-semibold tracking-wide uppercase">
              {focusMessage.messagedate}
            </p>
            <h3 className="py-8 text-xl max-w-4xl mx-auto leading-8 font-light tracking-tight text-gray-900 md:text-2xl sm:leading-10 text-center">
              <span className="text-2xl md:text-4xl font-bold text-teal-600 pr-2">
                &#8220;
              </span>
              {focusMessage.messagetitle}
              <span className="text-2xl md:text-4xl font-bold text-teal-600 pl-2">
                &#8221;
              </span>
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              {focusMessage.messagedescription}
            </p>
          </div>
        )}

        <div className="py-12">
          <div className="mt-8 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
            {/* Blurbs */}
            {blurbs.map((blurb, key) => (
              <div
                key={key}
                className="flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden"
                style={{ minHeight: "300px" }}
              >
                <div
                  className="flex-shrink-0 bg-cover bg-center bg-gray-50 h-64 md:h-auto md:w-64 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center"
                  style={{
                    backgroundImage: `url(${blurb.image})`,
                  }}
                ></div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href="/" className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {blurb.title}
                      </p>
                      <div className="mt-4 text-base text-gray-500">
                        <ReactMarkdow>{blurb.body}</ReactMarkdow>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
)

export default FeaturesSection

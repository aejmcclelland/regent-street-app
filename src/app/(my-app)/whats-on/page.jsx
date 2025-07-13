import Banner from '@/components/Banner';

export default function WhatsOnPage() {
    return (
      <div className="w-full max-w-4xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold text-primary">What’s On at Regent Street</h1>
        <p className="text-lg text-gray-700">
          Regent Street Presbyterian Church runs a wide range of weekly and seasonal activities for all ages. 
          Below is an overview of what’s on across our ministries.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Sundays:</strong> Worship services, Sunday School, and Creche for young children.
          </li>
          <li>
            <strong>Youth:</strong> A variety of programmes for teenagers and young adults including Youth Fellowship and social nights.
          </li>
          <li>
            <strong>Children:</strong> Activities such as First Friends, Holiday Bible Club, and special events throughout the year.
          </li>
          <li>
            <strong>Community Groups:</strong> Midweek fellowship, men’s/women’s ministry, and community outreach.
          </li>
          <li>
            <strong>Mission:</strong> Our church supports several local and international mission projects such as The Link and Fields of Life.
          </li>
        </ul>

        <p className="text-md text-gray-600">
          Visit individual pages via the menu to find out more about each group or ministry.
        </p>
      </div>
    );
}
export const UserScore = ({ score }: { score: number }) => {
  return (
    <div>
      <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-900 text-white border-4 border-green-500">
        {score * 10}%
      </div>
    </div>
  );
};

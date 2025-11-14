import AuthButtons from "./components/AuthButtons";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Personal Finance Tracker</h1>
      <p className="mb-6 text-center max-w-xl">
        Track your income and expenses, categorize transactions, and visualize your
        financial health. Sign in to get started.
      </p>

      <AuthButtons />
     // create new account
      <div className="mt-8 text-sm text-gray-600">
        <p>
          New here? Create an account via the Sign up button. Your data is private
          to your account.
        </p>
      </div>
    </main>
  );
}

import AddTodoForm from "@/components/AddTodoForm";
import TodoList from "@/components/TodoList";

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center text-white mb-4">📝 To-Do App</h1>

      {/* Responsive Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow overflow-hidden">
        
        {/* Left Side - Add Task Form */}
        <section className="p-6 bg-gray-800 text-white shadow-lg rounded-lg h-min">
          <AddTodoForm />
        </section>

        {/* Right Side - Task List with Scrollable Area */}
        <section className="p-6 bg-gray-900 text-white shadow-lg rounded-lg overflow-y-auto">
          <TodoList />
        </section>
      </div>
    </main>
  );
}

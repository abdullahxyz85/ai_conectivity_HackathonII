// Initialize charts
document.addEventListener("DOMContentLoaded", function () {
  // Speed History Chart
  const speedCtx = document.getElementById("speedChart").getContext("2d");
  new Chart(speedCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Download Speed (Mbps)",
          data: [200, 220, 215, 230, 245, 255],
          borderColor: "#4facfe",
          tension: 0.4,
          fill: true,
          backgroundColor: "rgba(79, 172, 254, 0.1)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
      },
    },
  });

  // Network Usage Chart
  const usageCtx = document.getElementById("usageChart").getContext("2d");
  new Chart(usageCtx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Data Usage (GB)",
          data: [45, 59, 80, 81, 56, 55, 40],
          backgroundColor: "#00f2fe",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});

// Mobile sidebar toggle
const toggleSidebar = () => {
  const sidebar = document.querySelector(".dashboard-sidebar");
  sidebar.classList.toggle("active");
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowTrendingUpIcon, 
  WalletIcon, 
  CheckBadgeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  PlayIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { value: '5,000+', label: 'Active Investors', icon: UserGroupIcon },
    { value: '₵2.5M+', label: 'Total Commission Paid', icon: CurrencyDollarIcon },
    { value: '98%', label: 'Success Rate', icon: ChartBarIcon },
    { value: '24/7', label: 'Support', icon: ShieldCheckIcon }
  ];

  const packages = [
    {
      name: 'Starter X1',
      price: '₵500',
      tasks: '10 tasks/day',
      commission: 'Up to ₵50/day',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Pro X3',
      price: '₵1,500',
      tasks: '30 tasks/day',
      commission: 'Up to ₵180/day',
      color: 'from-green-500 to-teal-600',
      popular: true
    },
    {
      name: 'Premium X5',
      price: '₵2,500',
      tasks: '50 tasks/day',
      commission: 'Up to ₵350/day',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const features = [
    {
      title: 'Instant Wallet Funding',
      description: 'Deposit funds instantly and start investing immediately',
      icon: WalletIcon
    },
    {
      title: 'Daily Tasks',
      description: 'Complete buying and selling tasks daily to earn commissions',
      icon: CheckBadgeIcon
    },
    {
      title: 'Real-time Dashboard',
      description: 'Track your earnings, balance, and progress in real-time',
      icon: ChartBarIcon
    },
    {
      title: 'Quick Withdrawals',
      description: 'Withdraw your earnings quickly and securely',
      icon: CurrencyDollarIcon
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ArrowTrendingUpIcon className="w-6 h-6" />
            </div>
            <span className="text-md md:text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FlipCashInvest
            </span>
          </motion.div>
          
          {/* <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Packages', 'Dashboard', 'About'].map((item) => (
              <a key={item} href="#" className="hover:text-blue-400 transition-colors">
                {item}
              </a>
            ))}
          </div> */}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-r from-blue-500 to-purple-600 px-6 py-2 md:text-md text-sm rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Invest Smart.
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Earn Smarter.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              Join thousands of investors making daily commissions through our innovative 
              task-based investment platform. Start with as little as ₵500 and watch your earnings grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                <span>Start Investing</span>
                <PlayIcon className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Investment Dashboard</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
                  <span>Wallet Balance</span>
                  <span className="text-green-400 font-bold">₵500.00</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
                  <span>Today's Commission</span>
                  <span className="text-blue-400 font-bold">₵25.50</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-700/50 rounded-xl">
                  <span>Tasks Completed</span>
                  <span className="text-purple-400 font-bold">5/10</span>
                </div>
                
                <div className="bg-linear-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30">
                  <div className="text-sm text-gray-300">Daily Progress</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ duration: 1, delay: 1 }}
                      className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                x: [0, 10, 0],
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -top-4 -right-4 bg-linear-to-r from-green-500 to-teal-500 p-4 rounded-xl shadow-2xl"
            >
              <div className="text-sm">+₵15.25</div>
              <div className="text-xs opacity-75">Commission</div>
            </motion.div>
            
            <motion.div
              animate={{ 
                x: [0, -10, 0],
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 bg-linear-to-r from-orange-500 to-red-500 p-4 rounded-xl shadow-2xl"
            >
              <div className="text-sm">2 Tasks</div>
              <div className="text-xs opacity-75">Pending</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Investment Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the package that matches your investment goals and start earning daily commissions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all group ${
                pkg.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-linear-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${pkg.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <CurrencyDollarIcon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {pkg.price}
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckBadgeIcon className="w-5 h-5 text-green-400" />
                  <span>{pkg.tasks}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ArrowTrendingUpIcon className="w-5 h-5 text-blue-400" />
                  <span>{pkg.commission}</span>
                </div>
              </div>
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-right ${pkg.color} hover:shadow-lg transition-all`}
              >
                Get Started
              </motion.button> */}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-6"
            >
              How <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">FlipCashInvest</span> Works
            </motion.h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-gray-700 backdrop-blur-lg">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 hover:border-blue-500/50 transition-all"
                  >
                    <div className="text-2xl font-bold text-blue-400">₵{item * 25}</div>
                    <div className="text-sm text-gray-400">Daily Earn</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-right from-blue-500 to-purple-600 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 text-center border border-gray-700 backdrop-blur-lg"
        >
          <h2 className=" text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Investment Journey</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful investors and start earning daily commissions today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-r from-blue-500 to-purple-600 px-10 py-3 md:px-12 md:py-4 md:text-lg text-sm rounded-full font-semibold  hover:shadow-2xl hover:shadow-blue-500/25 transition-all"
          >
            Start Investing Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-right from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <ArrowTrendingUpIcon className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-right from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FlipCashInvest
            </span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} FlipCashInvest. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;